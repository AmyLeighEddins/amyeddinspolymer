import { Polymer } from "../node_modules/@polymer/polymer/lib/legacy/polymer-fn.js";
import { html } from "../node_modules/@polymer/polymer/lib/utils/html-tag.js";
Polymer({
  _template: html`
  <style>
  .title {
    display: inline-block;
    background-image: linear-gradient(90deg, #ff0080, #8080ff, #00ffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 30px;
  }

  .about {
    font-size: 19px;
    font-weight: normal;
    margin: 30px;
  }
  
  </style>

  <h1 class="title">Hi! Amy here.<h1>

  <template is="dom-repeat" items="{{about.aboutme}}">
    <p class="about">{{item}}</p>
  </template>
  
  `,
  is: 'about-page',
  properties: {
    about: Object
  }
});