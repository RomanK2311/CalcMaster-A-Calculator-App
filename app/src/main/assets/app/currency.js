async function convertCurrency() {
    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;

    const apiKey = "5a8da0685cf87fab2463e0b5";
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    amount = amount.replace(',', '');

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.result === "success") {
            const conversionRate = data.conversion_rates[toCurrency];
            if (conversionRate) {
              const convertedAmount = (amount * conversionRate).toFixed(2);
              const formattedAmount = parseFloat(convertedAmount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                document.getElementById("result").innerHTML = `${formattedAmount} <p style="font-size: 24px;">${toCurrency}</p>`;
             document.querySelector('.linear-progresscurrency_loader').hidden = true;

            } else  {

            }
        } else {



        }
    } catch (error) {
        console.error("Error:", error);
        
        document.getElementById("result").innerHTML = "00";
  document.querySelector('.linear-progresscurrency_loader').hidden = false;

    }

}





  
  // Populate currency options
  async function populateCurrencies() {
    const apiKey = "5a8da0685cf87fab2463e0b5"; // Replace with your API key
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (data.result === "success") {
        const currencies = data.conversion_rates;
        const selectElements = document.querySelectorAll("md-outlined-select");
        
        for (let select of selectElements) {
          for (let currencyCode in currencies) {
            const currencyName = currencyNames[currencyCode];
            const option = document.createElement("md-select-option");
            const optionText = document.createElement('div')
            optionText.setAttribute('slot', 'headline');
            option.appendChild(optionText)
            option.value = currencyCode;
            optionText.innerHTML = `${currencyName} (${currencyCode})`;
            select.appendChild(option);
          }
        }
      } else {
        console.error("Error fetching currencies");
      

      }
    } catch (error) {
      console.error("Error:", error);

    }
  }


  const currencyNames = {
    "USD": "United States Dollar",
    "EUR": "Euro",
    "JPY": "Japanese Yen",
    "AED" : 'United Arab Emirates Dirham',
    "AFN" : 'Afghan Afghani',
    "ALL" : 'Albanian Lek',
    "AMD" : 'Armenian Dram',
    "ANG" : 'Netherlands Antillean Guilder',
    "AOA" : 'Angolan Kwanza',
    "ARS" : 'Argentine Peso',
    "AUD" : 'Australian Dollar',
    "AWG" : 'Aruban Florin',
    "AZN" : 'Azerbaijani Manat',
    "BAM" : 'Bosnia-Herzegovina Convertible Mark',
    "BBD" : 'Barbadian Dollar',
    "BDT" : 'Bangladeshi Taka',
    "BGN" : 'Bulgarian Lev',
    "BHD" : 'Bahraini Dinar',
    "BIF" : 'Burundian Franc',
    "BMD" : 'Bermudian Dollar',
    "BND" : 'Brunei Dollar',
    "BOB" : 'Bolivian Boliviano',
    "BRL" : 'Brazilian Real',
    "BSD" : 'Bahamian Dollar',
    "BTN" : 'Bhutanese Ngultrum',
    "BWP" : 'Botswana Pula',
    "BYN" : 'Belarusian Ruble',
    "BZD" : 'Belize Dollar',
    "CAD" : 'Canadian Dollar',
    "CDF" : 'Congolese Franc',
    "CHF" : 'Swiss Franc',
    "CLP" : 'Chilean Peso',
    "CNY" : 'Chinese Yuan',
    "COP" : 'Colombian Peso',
    "CRC" : 'Costa Rican Colón',
    "CUP" : 'Cuban Peso',
    "CVE" : 'Cape Verdean Escudo',
    "CZK" : 'Czech Koruna',
    "DJF" : 'Djiboutian Franc',
    "DKK" : 'Danish Krone',
    "DOP" : 'Dominican Peso',
    "DZD" : 'Algerian Dinar',
    "EGP" : 'Egyptian Pound',
    "ERN" : 'Eritrean Nakfa',
    "ETB" : 'Ethiopian Birr',
    "EUR" : 'Euro',
    "FJD" : 'Fijian Dollar',
    "FKP" : 'Falkland Islands Pound',
    "FOK" : 'Faroese Króna',
    "GBP" : 'British Pound Sterling',
    "GEL" : 'Georgian Lari',
    "GGP" : 'Guernsey Pound',
    "GHS" : 'Ghanaian Cedi',
    "GIP" : 'Gibraltar Pound',
    "GMD" : 'Gambian Dalasi',
    "GNF" : 'Guinean Franc',
    "GTQ" : 'Guatemalan Quetzal',
    "GYD" : 'Guyanaese Dollar',
    "HKD" : 'Hong Kong Dollar',
    'HNL' : 'Honduran Lempira',
    'HRK' : 'Croatian Kuna',
    'HTG' : 'Haitian Gourde',
    'HUF' : 'Hungarian Forint',
    'IDR' : 'Indonesian Rupiah',
    'ILS' : 'Israeli New Shekel',
    'IMP' : 'Isle of Man Pound',
    'INR' : 'Indian Rupee',
    'IQD' : 'Iraqi Dinar',
    'IRR' : 'Iranian Rial',
    'ISK' : 'Icelandic Króna',
    'JEP' : 'Jersey Pound',
    'JMD' : 'Jamaican Dollar',
    'JOD' : 'Jordanian Dinar',
    'KES' : 'Kenyan Shilling',
    'KGS' : 'Kyrgyzstani Som',
    'KHR' : 'Cambodian Riel',
    'KID' : 'Kiribati Dollar',
    'KMF' : 'Comorian Franc',
    'KRW' : 'South Korean Won',
    
    'KWD' : 'Kuwaiti Dinar',
    'KYD' : 'Cayman Islands Dollar',
    'KZT' : 'Kazakhstani Tenge',
    'LAK' : 'Lao Kip',
    'LBP' : 'Lebanese Pound',
    'LKR' : 'Sri Lankan Rupee',
    'LRD' : 'Liberian Dollar',
    'LSL' : 'Lesotho Loti',
    'LYD' : 'Libyan Dinar',
    'MAD' : 'Moroccan Dirham',
    'MDL' : 'Moldovan Leu',
    'MGA' : 'Malagasy Ariary',
    'MKD' : 'Macedonian Denar',
    'MMK' : 'Burmese Kyat',
    'MNT' : 'Mongolian Tugrik',
    'MOP' : 'Macanese Pataca',
    'MRU' : 'Mauritanian Ouguiya',
    'MUR' : 'Mauritian Rupee',
    'MVR' : 'Maldivian Rufiyaa',
    'MWK' : 'Malawian Kwacha',
    'MXN' : 'Mexican Peso',
    'MYR' : 'Malaysian Ringgit',
    'MZN' : 'Mozambican Metical',
    'NAD' : 'Namibian Dollar',
    'NGN' : 'Nigerian Naira',
    'NIO' : 'Nicaraguan Córdoba',
    'NOK' : 'Norwegian Krone',
    'NPR' : 'Nepalese Rupee',
    'NZD' : 'New Zealand Dollar',
    'OMR' : 'Omani Rial',
    'PAB' : 'Panamanian Balboa',
    'PEN' : 'Peruvian Sol',
    'PGK' : 'Papua New Guinean Kina',
    'PHP' : 'Philippine Peso',
    'PKR' : 'Pakistani Rupee',
    'PLN' : 'Polish Zloty',
    'PYG' : 'Paraguayan Guarani',
    'QAR' : 'Qatari Riyal',
    'RON' : 'Romanian Leu',
    'RSD' : 'Serbian Dinar',
    'RUB' : 'Russian Ruble',
    'RWF' : 'Rwandan Franc',
    'SAR' : 'Saudi Riyal',
    'SBD' : 'Solomon Islands Dollar',
    'SCR' : 'Seychellois Rupee',
    'SDG' : 'Sudanese Pound',
    'SEK' : 'Swedish Krona',
    'SGD' : 'Singapore Dollar',
    'SHP' : 'Saint Helena Pound',
    'SLE' : 'Sierra Leonean Leone',
    'SLL' : 'Sierra Leonean Leone',
    'SOS' : 'Somali Shilling',
    'SRD' : 'Surinamese Dollar',
    'SSP' : 'South Sudanese Pound',
    'STN' : 'São Tomé and Príncipe Dobra',
    'SYP' : 'Syrian Pound',
    'SZL' : 'Swazi Lilangeni',
    'THB' : 'Thai Baht',
    'TJS' : 'Tajikistani Somoni',
    'TMT' : 'Turkmenistan Manat',
    'TND' : 'Tunisian Dinar',
    'TOP' : 'Tongan Paanga',
    'TRY' : 'Turkish Lira',
    'TTD' : 'Trinidad and Tobago Dollar',
    'TVD' : 'Tuvaluan Dollar',
    'TWD' : 'New Taiwan Dollar',
    'TZS' : 'Tanzanian Shilling',
    'UAH' : 'Ukrainian Hryvnia',
    'UGX' : 'Ugandan Shilling',
    'UYU' : 'Uruguayan Peso',
    'UZS' : 'Uzbekistani Som',
    'VES' : 'Venezuelan Bolívar',
    'VND' : 'Vietnamese Dong',
    'VUV' : 'Vanuatu Vatu',
    'WST' : 'Samoan Tala',
    'XAF' : 'Central African CFA Franc',
    'XCD' : 'East Caribbean Dollar',
    "XDR": "Special Drawing Rights",
    "XOF": "West African CFA Franc",
    "XPF": "CFP Franc",
    "YER": "Yemeni Rial",
    "ZAR": "South African Rand",
    "ZMW": "Zambian Kwacha",
    "ZWL": "Zimbabwean Dollar",
    "USD": "United States Dollar",
    "AED": "United Arab Emirates Dirham",
    "AFN": "Afghan Afghani",
    "ALL": "Albanian Lek",
    "AMD": "Armenian Dram",
    "ANG": "Netherlands Antillean Guilder",
    "AOA": "Angolan Kwanza",
    "ARS": "Argentine Peso",
    "AUD": "Australian Dollar",
    "AWG": "Aruban Florin",
    "AZN": "Azerbaijani Manat",
    "BAM": "Bosnia-Herzegovina Convertible Mark",
    "BBD": "Barbadian Dollar",
    "BDT": "Bangladeshi Taka",
    "BGN": "Bulgarian Lev",
    "BHD": "Bahraini Dinar",
    "BIF": "Burundian Franc",
    "BMD": "Bermudian Dollar",
    "BND": "Brunei Dollar",
    "BOB": "Bolivian Boliviano",
    "BRL": "Brazilian Real",
    "BSD": "Bahamian Dollar",
    "BTN": "Bhutanese Ngultrum",
    "BWP": "Botswana Pula",
    "BYN": "Belarusian Ruble",
    "BZD": "Belize Dollar",
    "CAD": "Canadian Dollar",
    "CDF": "Congolese Franc",
    "CHF": "Swiss Franc",
    "CLP": "Chilean Peso",
    "CNY": "Chinese Yuan",
    "COP": "Colombian Peso",
    "CRC": "Costa Rican Colón",
    "CUP": "Cuban Peso",
    "CVE": "Cape Verdean Escudo",
    "CZK": "Czech Koruna",
    "DJF": "Djiboutian Franc",
    "DKK": "Danish Krone",
    "DOP": "Dominican Peso"





    
    
    
    
  };
  
  
  populateCurrencies();
  