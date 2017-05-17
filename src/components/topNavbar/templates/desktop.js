'use strict'
import yo from 'yo-yo'
import {Links, Items} from '../../navigation'

const Desktop = yo`
<ul class="navbar-top-desktop right hide-on-med-and-down">
  <li class="waves-effect waves-blue" id="li-home"><a href=${Links.link1} >${Items.item1}</a></li>
  <li class="waves-effect waves-blue" id="li-showView1"><a href=${Links.link2} >${Items.item2}</a></li>
  <li class="waves-effect waves-blue" id="li-showView2"><a href=${Links.link3}>${Items.item3}</a></li>
  <li class="waves-effect waves-blue" id="li-showView3"><a href=${Links.link4}>${Items.item4}</a></li>
  <li class="waves-effect waves-blue" id="li-showView4"><a href=${Links.link5}>${Items.item5}</a></li>
  <li class="waves-effect waves-blue" id="li-showView5"><a href=${Links.link6} >${Items.item6}</a></li>
</ul>
`
const DesktopDropdown = yo`
<ul class="navbar-top-desktop right hide-on-med-and-down">
  <li class="active" id="link-home"><a class='dropdown-button waves-effect waves-blue' href='#' data-activates='dropdown'>${Items.item1} <i class="material-icons">arrow_drop_down</i></a></li>
  <li class="waves-effect waves-blue" id="link-seccion"><a href=${Links.link1} >${Items.item1}</a></li>
  <li class="waves-effect waves-blue" id="li-showView1"><a href=${Links.link2} >${Items.item2}</a></li>
  <li class="waves-effect waves-blue" id="li-showView2"><a href=${Links.link3}>${Items.item3}</a></li>
  <li class="waves-effect waves-blue" id="li-showView3"><a href=${Links.link4}>${Items.item4}</a></li>
  <li class="waves-effect waves-blue" id="li-showView4"><a href=${Links.link5}>${Items.item5}</a></li>
  <li class="waves-effect waves-blue" id="li-showView5"><a href=${Links.link6} >${Items.item6}</a></li>
</ul>
`
export {Desktop, DesktopDropdown}
