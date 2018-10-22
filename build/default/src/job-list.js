import "../node_modules/@polymer/paper-card/paper-card.js";
import "../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js";
import "../node_modules/@polymer/app-layout/app-header/app-header.js";
import "../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js";
import "../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js";
import { Polymer } from "../node_modules/@polymer/polymer/lib/legacy/polymer-fn.js";
import { html } from "../node_modules/@polymer/polymer/lib/utils/html-tag.js";
Polymer({
  _template: html`
    <style>

    app-header {
      color: #fff;
      background-color: #aa55ff;
    }

    app-toolbar {
      height: 50px;
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

    .content {
      display: block;
      position: relative;
      max-width: 1000px;
      margin: 30px auto;
    }

    .card-container {
      display: inline-block;
      width: 33.33%;
      color: black;
      text-decoration: none;
    }

    paper-card {
      display: block;
      margin: 5px;

      --paper-card-header-image: {
        height: 200px;
      }
    }

    paper-card h2 {
      margin: 4px;
      font-weight: normal;
    }

    paper-card p {
      margin: 4px;
      color: #999;
    }

    @media (max-width: 960px) {
      .content {
        max-width: 800px;
      }

      .card-container {
        width: 50%;
      }
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

      .content {
        max-width: 400px;
      }

      .card-container {
        width: 100%;
      }
    }

    </style>

    <!-- main panel -->
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

      <div class="content">
        <template is="dom-repeat" items="{{jobs}}"><!-- No empty text node
        --><a href="#/detail/{{item.id}}" class="card-container">
            <paper-card image="{{item.imageUrl}}">
              <div class="card-content">
                <h2>{{item.shortName}}</h2>
                <p><span>{{item.dates}}</span></p>
              </div>
            </paper-card>
          </a><!-- No empty text node
      --></template>
      </div>

    </app-header-layout>
`,
  is: 'job-list',
  properties: {
    jobs: Object
  }
});