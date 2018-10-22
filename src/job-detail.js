import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-icon/iron-icon.js';

import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-menu-button/paper-menu-button.js';

import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style>

    :host {
      display: block;
      background-attachment: fixed;
      background-size: 100%;
      background-repeat: no-repeat;
    }

    app-toolbar {
      color: #8080ff;
      background-color: #aa55ff;
    }

    paper-icon-button {
      color: white;
      --paper-icon-button-ink-color: white;
    }

    .card-container {
      position: relative;
      width: 920px;
      height: 574px;
      margin: 300px auto 0px;
    }

    paper-card {
      padding: 16px 100px 16px 100px;
      width: 100%;
      sizing: border-box;
    }

    paper-card p {
      margin: 12px 0;
      color: #999;
    }

    h4 {
      margin: 60px 0 12px;
    }

    @media (max-width: 720px) {

      .card-container {
        width: 100%;
        margin: 150px 0 0;
      }

    }

    </style>

    <!-- main panel -->

      <!-- top toolbar -->
      <app-toolbar>
        <!-- back button -->
        <a href="#/experience" tabindex="-1">
          <paper-icon-button icon="app:arrow-back"></paper-icon-button>
        </a>
      </app-toolbar>

      <div class="card-container">

        <paper-card heading="{{job.name}} - {{job.title}}">
          <div class="card-content">
            <p>{{job.location}} - {{job.position}} ({{job.dates}})</p>
            
            <h4>Description</h4>
            <ul>
            <template is="dom-repeat" items="{{job.description}}">
              <li>{{item}}</li>
            </template>
            </ul>

          </div>
        </paper-card>

      </div>
`,

  is: 'job-detail',

  properties: {

    job: {type: Object, observer: '__jobChanged'},

  },

  __jobChanged: function(job) {
    if (job) {
      this.style.backgroundImage = 'url(' + job.imageUrl + ')';
    }
  }
});
