<template>
    <div>
        <div v-for="sheet in sheets">
            {{ sheet.name }}
        </div>
        <table v-for="sheet in sheets" class="table">
            <tr>
                <th v-for="name in sheet.columnNames">{{ name }}</th>
            </tr>
            <tr v-for="element in sheet.elements">
                <td v-for="name in sheet.columnNames">{{ element[name] }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
  import Vue from 'vue'
  import Tabletop from 'tabletop'

  export default {
    data: function () {
      return {
        sheets: [],
      }
    },
    methods: {
      loadSheet: function (data) {
        const sheets = [];
        for(let i in data) {
          sheets.push({
            name: i,
            columnNames: data[i].columnNames,
            elements: data[i].elements,
          });
        }
        Vue.set(this, 'sheets', sheets)
      },
    },
    mounted: function () {
      Tabletop.init({
        key: '1T_S0MpumR0KGlfKOiVGsZvxobFOQrUw1jsPGT8z-5fc',
        callback: this.loadSheet,
      })
    },
  }
</script>