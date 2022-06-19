const bannerTemplate = document.createElement('template');
bannerTemplate.innerHTML = `

<style>
.banner{
    text-align: center;
}
.smokeline{
    border: 1px solid rgb(206, 203, 171);
}

.banner-data{
    color: whitesmoke;
    padding-left: 10px;
    padding-right: 10px;
}

a:link, a:visited {
    color: whitesmoke;
    text-decoration: underline;
    cursor: auto;
  }
  
  a:link:active, a:visited:active {
    color: lightblue;
  }
</style>

<div class="smokeline"></div>
    <div class="banner">
        <tr class="banner-row">
            <td class="badder-data">
                <a href="index.html">home</a>
            </td>
            <td class="badder-data">
                <a href="about.html">about</a>
            </td>
            <td class="badder-data">
                <a href="projects.html">projects</a>
            </td>
            
        </tr>
    </div>
<div class="smokeline"></div>
`

class Banner extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(bannerTemplate.content);
    }
}

customElements.define('banner-component', Banner);
