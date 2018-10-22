import "../node_modules/@polymer/app-route/app-location.js";
import "../node_modules/@polymer/app-route/app-route.js";
import "../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js";
import "../node_modules/@polymer/iron-pages/iron-pages.js";
import "../node_modules/@polymer/iron-selector/iron-selector.js";
import "../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../node_modules/@polymer/paper-item/paper-item.js";
import "../node_modules/@polymer/paper-listbox/paper-listbox.js";
import "../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js";
import "../node_modules/@polymer/app-layout/app-drawer/app-drawer.js";
import "../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js";
import "../node_modules/@polymer/app-layout/app-header/app-header.js";
import "../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js";
import './job-detail.js';
import './job-list.js';
import './app-icons.js';
import './about-page.js';
import { scroll } from "../node_modules/@polymer/app-layout/helpers/helpers.js";
import { Polymer } from "../node_modules/@polymer/polymer/lib/legacy/polymer-fn.js";
import { html } from "../node_modules/@polymer/polymer/lib/utils/html-tag.js";
Polymer({
  _template: html`
    <style>
      :host {
        --paper-font-common-base: {
          font-family: Raleway, sans-serif;
        };
      }

      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
      }

      .avatar-container {
        position: relative;
        border: 2px solid #aa55ff;
        border-radius: 50%;
        height: 90px;
        padding: 2px;
        width: 90px;
        margin: 20px auto 5px;
      }

      .avatar-container .image {
        background-image: url('data/images/amy.png');
        background-size: contain;
        border-radius: 50%;
        height: 100%;
        width: 100%;
      }

      .links-container {
        display: block;
        margin: 5px 70px;
        width: 50%;
      }

      .contact-info {
        margin: 0 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #aa55ff;
        text-align: center;
      }

      .contact-info .name {
        font-weight: bold;
      }

      .links {
        padding-top: 5px;
        padding-bottom: 25px;
      }

      paper-item {
        height: 54px;
      }

      paper-item > a {
        width: 100%;
        height: 100%;
        line-height: 54px;
        text-align: center;
        text-decoration: none;
        color: black;
      }

      paper-icon-button {
        --paper-icon-button-ink-color: #aa55ff;
      }

      .rainbow:hover {
        -webkit-animation: rainbow 3s infinite;
      }
      @-webkit-keyframes rainbow {
        0% {color: #ff0000;}
        10% {color: #ff8000;}
        20% {color: #ffff00;}
        30% {color: #80ff00;}
        40% {color: #00ff00;}
        50% {color: #00ff80;}
        60% {color: #00ffff;}
        70% {color: #0080ff;}
        80% {color: #0000ff;}
        90% {color: #8000ff;}
        100% {color: #ff0080;}
      }

    </style>

    <app-location route="{{_route}}" use-hash-as-path></app-location>
    <app-route route="{{_route}}" pattern="/:page" data="{{_pageData}}" tail="{{_subRoute}}"></app-route>
    <app-route route="{{_subRoute}}" pattern="/:id" data="{{_idData}}"></app-route>

    <app-drawer-layout responsive-width="1280px">

      <!-- nav panel -->
      <app-drawer id="drawer" swipe-open slot="drawer">
        <app-header-layout has-scrolling-region>

          <app-header fixed slot="header">

            <div class="avatar-container">
              <div class="image"></div> 
            </div>

            <div class="links-container">
              <a href="mailto:amyleigheddins@gmail.com" title="Peep that Email">
                <svg viewBox="0 0 512 512" style="display:inline-block; width: 20px; height: 20px; fill: #00d5d5"><path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"/></svg></a>
              <a href="https://www.linkedin.com/in/amy-eddins" title="Peep that LinkedIn">
                <svg viewBox="0 0 512 512" style="display:inline-block; width: 20px; height: 20px; fill: #00d5d5"><path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/></svg></a>
              <a href="https://www.github.com/amyleigheddins" title="Peep that GitHub">
                <svg viewBox="0 0 512 512" style="display:inline-block; width: 20px; height: 20px; fill: #00d5d5"><path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/></svg></a>
              <a href="https://www.last.fm/user/yourblackswan" title="Peep that Last.fm">
                <svg viewBox="0 0 512 512" style="display:inline-block; width: 20px; height: 20px; fill: #00d5d5"><path d="M230.104 336.568l-13.607-36.988c0 0-22.11 24.66-55.268 24.66 -29.341 0-50.172-25.512-50.172-66.328 0-52.293 26.359-71.001 52.297-71.001 37.412 0 49.316 24.234 59.522 55.273l13.607 42.518c13.603 41.236 39.113 74.402 112.666 74.402 52.727 0 88.437-16.155 88.437-58.672 0-34.438-19.56-52.297-56.125-60.802l-27.209-5.951c-18.707-4.252-24.233-11.906-24.233-24.659 0-14.456 11.478-22.96 30.189-22.96 20.406 0 31.458 7.653 33.162 25.935l42.516-5.103c-3.402-38.263-29.761-53.996-73.127-53.996 -38.266 0-75.68 14.456-75.68 60.799 0 28.912 14.029 47.197 49.315 55.697l28.916 6.801c21.683 5.104 28.908 14.031 28.908 26.363 0 15.73-15.305 22.107-44.218 22.107 -42.941 0-60.794-22.534-70.999-53.574l-14.032-42.513c-17.854-55.271-46.342-75.68-102.892-75.68 -62.499-0.001-95.663 39.538-95.663 106.715 0 64.628 33.164 99.489 92.689 99.489C207.141 359.1 230.104 336.568 230.104 336.568L230.104 336.568z"/></svg></a>
              <a href="https://www.instagram.com/amyleigheddins" title="Peep that Instagram">
                <svg viewBox="0 0 512 512" style="display:inline-block; width: 20px; height: 20px; fill: #00d5d5"><path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"/><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"/><circle cx="351.5" cy="160.5" r="21.5"/></svg></a>
            </div> 
            
            <div class="contact-info">
              <div class="name">Amy</div>
            </div>

          </app-header>

          <!-- nav menu -->
          <!-- Two way binding to the selected property has been removed due to polymer/issues/4405 -->
          <paper-listbox selected="[[_pageData.page]]" attr-for-selected="name" on-iron-activate="_drawerSelected">
            <paper-item name="about">
              <a href="#/about" class="rainbow" name="name">About</a>
            </paper-item>
            <paper-item name="experience">
              <a href="#/experience" class="rainbow" name="name">Experience</a>
            </paper-item>
          </paper-listbox>
        </app-header-layout>
      </app-drawer>

      <!-- list/detail pages -->
      <iron-pages selected="[[_selectedPage]]" attr-for-selected="name">

        <about-page name="about" about="[[about]]">
          <paper-icon-button icon="app:menu" drawer-toggle slot="drawer-toggle"></paper-icon-button>
        </about-page>

        <job-list name="experience" jobs="[[jobs]]">
          <paper-icon-button icon="app:menu" drawer-toggle slot="drawer-toggle"></paper-icon-button>
        </job-list>

        <job-detail id="detailView" name="detail" job="[[_getJobs(jobs, _idData.id)]]"></job-detail>

      </iron-pages>

    </app-drawer-layout>
`,
  is: 'main-app',
  properties: {
    jobs: Object,
    about: Object,
    _route: Object,
    _subRoute: Object,
    _pageData: {
      type: Object,
      observer: '_pageDataChanged'
    },
    _selectedPage: String,
    _idData: Object,
    _scrollPositionMap: {
      type: Object,
      value: function () {
        return {};
      }
    }
  },
  attached: function () {
    this.async(function () {
      if (!this._route.path) {
        this.set('_route.path', '/about');
      }
    });
  },
  _getJobs: function () {
    if (this.jobs && this._idData && this._idData.id) {
      for (var i = 0; i < this.jobs.length; ++i) {
        var r = this.jobs[i];

        if (r.id === this._idData.id) {
          return r;
        }
      }
    }

    return null;
  },
  _drawerSelected: function () {
    if (!this.$.drawer.persistent) this.$.drawer.close();
  },

  /**
   * Preserves the document scroll position, so
   * it can be restored when returning to a page.
   */
  _pageDataChanged: function (pageData, oldPageData) {
    var map = this._scrollPositionMap;

    if (oldPageData != null && oldPageData.page != null) {
      map[oldPageData.page] = window.pageYOffset;
    }

    this._selectedPage = pageData.page;

    if (map[pageData.page] != null) {
      scroll({
        top: map[pageData.page],
        behavior: 'silent'
      });
    } else if (this.isAttached) {
      scroll({
        top: 0,
        behavior: 'silent'
      });
    }
  }
});