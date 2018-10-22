import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

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

  app-toolbar {
    height: 50px;
  }

  app-header {
    color: #fff;
    background-color: #aa55ff;
  }

  [main-title] {
    position: absolute;
    top: -50px;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url('data/images/programming-code-cyan.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 90px;
    -webkit-transform-origin: center top !important;
    transform-origin: center top !important;

    /* The difference in font size is used to calculate the scale of the title in the transition. */
    font-size: 32px;
  }

  [condensed-title] {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url('data/images/programming-code-cyan.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50px;

    /* The difference in font size is used to calculate the scale of the title in the transition. */
    font-size: 16px;
  }

  @media (max-width: 719px) {
    app-toolbar {
      height: 60px;
    }

    [condensed-title] {
      background-image: url('data/images/programming-code-cyan.png');
      background-size: 60px;
    }

    [main-title] {
      top: -60px;
      background-image: url('data/images/programming-code-cyan.png');
      background-size: 90px;
    }
  }

  .about {
    font-size: 19px;
    font-weight: normal;
    margin: 30px;
  }
  
  </style>

  <app-header-layout>

    <app-header effects="resize-title" condenses fixed shadow slot="header">
      <app-toolbar class="top-toolbar">
        <slot name="drawer-toggle"></slot>
        <div condensed-title></div>
      </app-toolbar>
      <app-toolbar class="bottom-toolbar">
        <div main-title></div>
      </app-toolbar>
    </app-header>

    <h1 class="title">Hi! Amy here.<h1>

    <template is="dom-repeat" items="{{about.aboutme}}">
      <p class="about">{{item}}</p>
    </template>

  </app-header-layout>
  
  `,
  is: 'about-page',

  properties: {
    about: Object,
  }

})