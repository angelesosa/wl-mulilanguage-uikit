import { Component, ComponentInterface, Host, h, State, Prop, Method, Watch, Event, EventEmitter } from '@stencil/core';

interface Flag {
  key: string,
  text: string,
  selected: boolean,
  class: string,
}

@Component({
  tag: 'ml-flag',
  styleUrl: 'ml-flag.css',
  shadow: false,
  assetsDirs: ['assets']
})
export class MlFlag implements ComponentInterface {

  confifuredFlags = {
    "DEU": {
      key: "DEU",
      text: "Germany",
      selected: false,
      class: "flag-deu",
    },
    "FIN": {
      key: "FIN",
      text: "Finland",
      selected: false,
      class: "flag-fin",
    },
    "NOR": {
      key: "NOR",
      text: "Norway",
      selected: false,
      class: "flag-nor",
    },
    "CAN": {
      key: "CAN",
      text: "Canada",
      selected: false,
      class: "flag-can",
    },
    "NZL": {
      key: "NZL",
      text: "New Zealand",
      selected: false,
      class: "flag-nzl",
    },
    "IRL": {
      key: "IRL",
      text: "Ireland",
      selected: false,
      class: "flag-irl",
    },
    "ALB": {
      key: "ALB",
      text: "Albania",
      selected: false,
      class: "flag-alb",
    },
    "AND": {
      key: "AND",
      text: "Andorra",
      selected: false,
      class: "flag-and",
    },
    "ATG": {
      key: "ATG",
      text: "Antigua and Barbuda",
      selected: false,
      class: "flag-atg",
    },
    "ARG": {
      key: "ARG",
      text: "Argentina",
      selected: false,
      class: "flag-arg",
    },
    "ARM": {
      key: "ARM",
      text: "Armenia",
      selected: false,
      class: "flag-arm",
    },
    "AUT": {
      key: "AUT",
      text: "Austria",
      selected: false,
      class: "flag-aut",
    },
    "AZE": {
      key: "AZE",
      text: "Azerbaijan",
      selected: false,
      class: "flag-aze",
    },
    "BHS": {
      key: "BHS",
      text: "Bahamas",
      selected: false,
      class: "flag-bhs",
    },
    "BGD": {
      key: "BGD",
      text: "Bangladesh",
      selected: false,
      class: "flag-bgd",
    },
    "BRB": {
      key: "BRB",
      text: "Barbados",
      selected: false,
      class: "flag-brb",
    },
    "BLZ": {
      key: "BLZ",
      text: "Belize",
      selected: false,
      class: "flag-blz",
    },
    "BTN": {
      key: "BTN",
      text: "Bhutan",
      selected: false,
      class: "flag-btn",
    },
    "BOL": {
      key: "BOL",
      text: "Bolivia",
      selected: false,
      class: "flag-bol",
    },
    "BWA": {
      key: "BWA",
      text: "Botswana",
      selected: false,
      class: "flag-bwa",
    },
    "BVT": {
      key: "BVT",
      text: "Bouvet Island",
      selected: false,
      class: "flag-unknown",
    },
    "BRA": {
      key: "BRA",
      text: "Brazil",
      selected: false,
      class: "flag-bra",
    },
    "BRN": {
      key: "BRN",
      text: "Brunei Darussalam",
      selected: false,
      class: "flag-brn",
    },
    "BFA": {
      key: "BFA",
      text: "Burkina Faso",
      selected: false,
      class: "flag-bfa",
    },
    "CMR": {
      key: "CMR",
      text: "Cameroon",
      selected: false,
      class: "flag-cmr",
    },
    "TCD": {
      key: "TCD",
      text: "Chad",
      selected: false,
      class: "flag-tcd",
    },
    "CHL": {
      key: "CHL",
      text: "Chile",
      selected: false,
      class: "flag-chl",
    },
    "COL": {
      key: "COL",
      text: "Colombia",
      selected: false,
      class: "flag-col",
    },
    "COG": {
      key: "COG",
      text: "Congo",
      selected: false,
      class: "flag-cog",
    },
    "COK": {
      key: "COK",
      text: "Cook Islands",
      selected: false,
      class: "flag-cok",
    },
    "CRI": {
      key: "CRI",
      text: "Costa Rica",
      selected: false,
      class: "flag-cri",
    },
    "CUB": {
      key: "CUB",
      text: "Cuba",
      selected: false,
      class: "flag-cub",
    },
    "DJI": {
      key: "DJI",
      text: "Djibouti",
      selected: false,
      class: "flag-dji",
    },
    "DMA": {
      key: "DMA",
      text: "Dominica",
      selected: false,
      class: "flag-dma",
    },
    "DOM": {
      key: "DOM",
      text: "Dominican Republic",
      selected: false,
      class: "flag-dom",
    },
    "ECU": {
      key: "ECU",
      text: "Ecuador",
      selected: false,
      class: "flag-ecu",
    },
    "SLV": {
      key: "SLV",
      text: "El Salvador",
      selected: false,
      class: "flag-slv",
    },
    "GNQ": {
      key: "GNQ",
      text: "Equatorial Guinea",
      selected: false,
      class: "flag-gnq",
    },
    "FLK": {
      key: "FLK",
      text: "Falkland Islands (Malvinas)",
      selected: false,
      class: "flag-flk",
    },
    "FJI": {
      key: "FJI",
      text: "Fiji",
      selected: false,
      class: "flag-fji",
    },
    "GAB": {
      key: "GAB",
      text: "Gabon",
      selected: false,
      class: "flag-gab",
    },
    "GMB": {
      key: "GMB",
      text: "Gambia",
      selected: false,
      class: "flag-gmb",
    },
    "GEO": {
      key: "GEO",
      text: "Georgia",
      selected: false,
      class: "flag-geo",
    },
    "GHA": {
      key: "GHA",
      text: "Ghana",
      selected: false,
      class: "flag-gha",
    },
    "GRD": {
      key: "GRD",
      text: "Grenada",
      selected: false,
      class: "flag-grd",
    },
    "GTM": {
      key: "GTM",
      text: "Guatemala",
      selected: false,
      class: "flag-gtm",
    },
    "GUY": {
      key: "GUY",
      text: "Guyana",
      selected: false,
      class: "flag-guy",
    },
    "HND": {
      key: "HND",
      text: "Honduras",
      selected: false,
      class: "flag-hnd",
    },
    "ISL": {
      key: "ISL",
      text: "Iceland",
      selected: false,
      class: "flag-isl",
    },
    "IND": {
      key: "IND",
      text: "India",
      selected: false,
      class: "flag-ind",
    },
    "JAM": {
      key: "JAM",
      text: "Jamaica",
      selected: false,
      class: "flag-jam",
    },
    "JPN": {
      key: "JPN",
      text: "Japan",
      selected: false,
      class: "flag-jpn",
    },
    "KIR": {
      key: "KIR",
      text: "Kiribati",
      selected: false,
      class: "flag-kir",
    },
    "KOR": {
      key: "KOR",
      text: "Korea, Republic of",
      selected: false,
      class: "flag-kor",
    },
    "KGZ": {
      key: "KGZ",
      text: "Kyrgyzstan",
      selected: false,
      class: "flag-kgz",
    },
    "LSO": {
      key: "LSO",
      text: "Lesotho",
      selected: false,
      class: "flag-lso",
    },
    "LIE": {
      key: "LIE",
      text: "Liechtenstein",
      selected: false,
      class: "flag-lie",
    },
    "LUX": {
      key: "LUX",
      text: "Luxembourg",
      selected: false,
      class: "flag-lux",
    },
    "MAC": {
      key: "MAC",
      text: "Macao",
      selected: false,
      class: "flag-mac",
    },
    "MDG": {
      key: "MDG",
      text: "Madagascar",
      selected: false,
      class: "flag-mdg",
    },
    "MWI": {
      key: "MWI",
      text: "Malawi",
      selected: false,
      class: "flag-mwi",
    },
    "MLT": {
      key: "MLT",
      text: "Malta",
      selected: false,
      class: "flag-mlt",
    },
    "MRT": {
      key: "MRT",
      text: "Mauritania",
      selected: false,
      class: "flag-mrt",
    },
    "MUS": {
      key: "MUS",
      text: "Mauritius",
      selected: false,
      class: "flag-mus",
    },
    "MEX": {
      key: "MEX",
      text: "Mexico",
      selected: false,
      class: "flag-mex",
    },
    "FSM": {
      key: "FSM",
      text: "Micronesia, Federated States of",
      selected: false,
      class: "flag-fsm",
    },
    "MCO": {
      key: "MCO",
      text: "Monaco",
      selected: false,
      class: "flag-mco",
    },
    "MAR": {
      key: "MAR",
      text: "Morocco",
      selected: false,
      class: "flag-mar",
    },
    "NAM": {
      key: "NAM",
      text: "Namibia",
      selected: false,
      class: "flag-nam",
    },
    "NRU": {
      key: "NRU",
      text: "Nauru",
      selected: false,
      class: "flag-nru",
    },
    "NPL": {
      key: "NPL",
      text: "Nepal",
      selected: false,
      class: "flag-npl",
    },
    "NER": {
      key: "NER",
      text: "Niger",
      selected: false,
      class: "flag-ner",
    },
    "NIU": {
      key: "NIU",
      text: "Niue",
      selected: false,
      class: "flag-niu",
    },
    "MKD": {
      key: "MKD",
      text: "North Macedonia",
      selected: false,
      class: "flag-mkd",
    },
    "PLW": {
      key: "PLW",
      text: "Palau",
      selected: false,
      class: "flag-plw",
    },
    "PAN": {
      key: "PAN",
      text: "Panama",
      selected: false,
      class: "flag-pan",
    },
    "PNG": {
      key: "PNG",
      text: "Papua New Guinea",
      selected: false,
      class: "flag-png",
    },
    "PRY": {
      key: "PRY",
      text: "Paraguay",
      selected: false,
      class: "flag-pry",
    },
    "PER": {
      key: "PER",
      text: "Peru",
      selected: false,
      class: 'flag-per'
    },
    "POL": {
      key: "POL",
      text: "Poland",
      selected: false,
      class: "flag-pol",
    },
    "RWA": {
      key: "RWA",
      text: "Rwanda",
      selected: false,
      class: "flag-rwa",
    },
    "KNA": {
      key: "KNA",
      text: "Saint Kitts and Nevis",
      selected: false,
      class: "flag-kna",
    },
    "LCA": {
      key: "LCA",
      text: "Saint Lucia",
      selected: false,
      class: "flag-lca",
    },
    "VCT": {
      key: "VCT",
      text: "Saint Vincent and the Grenadines",
      selected: false,
      class: "flag-unknown",
    },
    "WSM": {
      key: "WSM",
      text: "Samoa",
      selected: false,
      check: true,
      class: "flag-unknown",
    },
    "STP": {
      key: "STP",
      text: "Sao Tome and Principe",
      selected: false,
      class: "flag-stp",
    },
    "SEN": {
      key: "SEN",
      text: "Senegal",
      selected: false,
      class: "flag-sen",
    },
    "SYC": {
      key: "SYC",
      text: "Seychelles",
      selected: false,
      class: "flag-syc",
    },
    "SLB": {
      key: "SLB",
      text: "Solomon Islands",
      selected: false,
      class: "flag-slb",
    },
    "LKA": {
      key: "LKA",
      text: "Sri Lanka",
      selected: false,
      class: "flag-lka",
    },
    "SUR": {
      key: "SUR",
      text: "Suriname",
      selected: false,
      class: "flag-sur",
    },
    "SWZ": {
      key: "SWZ",
      text: "Swaziland",
      selected: false,
      class: "flag-swz",
    },
    "TWN": {
      key: "TWN",
      text: "Taiwan, Province of China",
      selected: false,
      class: "flag-twn",
    },
    "TJK": {
      key: "TJK",
      text: "Tajikistan",
      selected: false,
      class: "flag-tjk",
    },
    "THA": {
      key: "THA",
      text: "Thailand",
      selected: false,
      class: "flag-tha",
    },
    "TLS": {
      key: "TLS",
      text: "Timor-Leste",
      selected: false,
      class: "flag-tls",
    },
    "TGO": {
      key: "TGO",
      text: "Togo",
      selected: false,
      class: "flag-tgo",
    },
    "TKL": {
      key: "TKL",
      text: "Tokelau",
      selected: false,
      class: "flag-tkl",
    },
    "TON": {
      key: "TON",
      text: "Tonga",
      selected: false,
      class: "flag-ton",
    },
    "TTO": {
      key: "TTO",
      text: "Trinidad and Tobago",
      selected: false,
      class: "flag-tto",
    },
    "TUV": {
      key: "TUV",
      text: "Tuvalu",
      selected: false,
      class: "flag-tuv",
    },
    "UGA": {
      key: "UGA",
      text: "Uganda",
      selected: false,
      class: "flag-uga",
    },
    "URY": {
      key: "URY",
      text: "Uruguay",
      selected: false,
      class: "flag-ury",
    },
    "UZB": {
      key: "UZB",
      text: "Uzbekistan",
      selected: false,
      class: "flag-uzb",
    },
    "VUT": {
      key: "VUT",
      text: "Vanuatu",
      selected: false,
      class: "flag-vut",
    },
    "ZMB": {
      key: "ZMB",
      text: "Zambia",
      check: true,
      selected: false,
      class: "flag-unknown",
    },
    "ALA": {
      key: "ALA",
      text: "Åland Islands",
      selected: false,
      class: "flag-ala",
    },
  }
  emptyFlag = { key: "", text: "", selected: false, class: "", };
  @Prop() flags: string;
  @Prop() default: string = ""; // default key
  @Prop() label = "";
  @Prop({ attribute: 'text' }) defTxtSelect = "Select a item";
  @Prop() showTextDefault: boolean = false;
  @Prop() showAll: boolean = false;
  @State() open: boolean = false;
  @State() selected: boolean = false;
  @State() innerFlags: Array<Flag> = [];
  @State() flagSelected: Flag = this.emptyFlag;
  @Event() clickflag: EventEmitter


  @Watch('flags')
  parseFlags(newValue: string) {
    if (!newValue) return;
    if (newValue && !Array.isArray(newValue)) {
      this.innerFlags = JSON.parse(newValue);
      return;
    }
    if (Array.isArray(newValue))
      this.innerFlags = newValue;
  }

  componentWillLoad() {
    this.parseFlags(this.flags);
    this.innerFlags = this.innerFlags.map(flag => {
      return {
        ...this.confifuredFlags[flag.key],
        ...!this.showTextDefault && { text: '' },
        ...flag,
      }
    });
    if (this.showAll) this.innerFlags = Object.values(this.confifuredFlags);
    this.flagSelected.text = this.defTxtSelect;
    if (!this.default || !this.innerFlags.length) return;
    this.flagSelected = this.innerFlags.find(flag => flag.key == this.default) || { ...this.emptyFlag, text: this.defTxtSelect };
  }

  onClickCaption() {
    this.open = !this.open;
  }

  onClickItem(key: string) {
    this.open = !this.open;
    this.innerFlags = this.innerFlags.map(flag => {
      return {
        ...flag,
        selected: flag.key == key
      }
    });
    this.flagSelected = { ...this.innerFlags.find(flag => flag.key == key) };
    this.clickflag.emit(this.flagSelected);
  }

  @Method()
  async reset() {
    this.flagSelected = { ...this.emptyFlag, text: this.defTxtSelect };
  }

  @Method()
  async selectedItem() {
    return { ...this.flagSelected };
  }

  @Method()
  async selectItem(key: string) {
    if (!key || !this.innerFlags.length) return;
    const itemFound = this.innerFlags.find(flag => flag.key == key);
    this.flagSelected = itemFound ? itemFound : this.flagSelected;
  }

  render() {
    return (
      <Host>
        <div class="flag-dropdown-container">
          <div class={`flag-dropdown ${this.open ? 'open' : ''}`}>
            <div class="flag-dropdown-caption-label">{this.label}</div>
            <div
              class={`flag-dropdown-caption flag-dropdown-img ${this.flagSelected.class}`}
              onClick={this.onClickCaption.bind(this)}
            >
              {this.flagSelected.text}
            </div>
            <div class="flag-dropdown-divider"></div>
            <div class="flag-dropdown-list">
              {
                Object.values(this.innerFlags).map((item) =>
                  <div
                    class={`flag-dropdown-item flag-dropdown-img ${item.class} ${item.selected ? 'selected' : ''}`}
                    key={item.key}
                    onClick={() => this.onClickItem(item.key)}
                  >
                    {item.text}
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
