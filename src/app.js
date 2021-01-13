import Vue from 'vue'

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            exchangeRates: [],
            selectedCurrencyRate: '',
            convertedValue: '',
            inputValue: ''
        },
        mounted(){
            this.getexchangeRates()
        },

        computed: {



        },


        methods: {
            getexchangeRates: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                .then(res => res.json())
                .then(processedData => this.exchangeRates = processedData)
            },

            totalConvertedValue: function() {
                return this.selectedCurrencyRate * inputValue
            }
            
        }
    })
});