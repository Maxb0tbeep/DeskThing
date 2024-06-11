/* eslint-disable react/prop-types */
/**
 * Generated by `./scripts/prebuild/generate-icons.ts`.
 * Run `yarn generate-icons` to regenerate.
 */
import React from 'react';
import { findClosestGlyphAvailable, Icon } from "../../";
export function IconBluetooth(props) {
  var _props$autoMirror;

  /* prettier-ignore */
  var iconList = [{
    'size': 16,
    'svgContent': '<path d=\'M7.809 1.538a.5.5 0 01.545.108l3 3a.5.5 0 010 .708L8.707 8l2.647 2.646a.5.5 0 010 .708l-3 3A.5.5 0 017.5 14V9.207l-2.146 2.147a.5.5 0 01-.708-.707L7.293 8 4.646 5.354a.5.5 0 11.708-.708L7.5 6.793V2a.5.5 0 01.309-.462zm.691 7.67v3.585L10.293 11 8.5 9.207zm0-2.415L10.293 5 8.5 3.207v3.586z\'/>'
  }, {
    'size': 24,
    'svgContent': '<path d=\'M11.713 2.307a.75.75 0 01.817.163l4.5 4.5a.75.75 0 010 1.06L13.06 12l3.97 3.97a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.28-.53v-7.19l-3.22 3.22a.75.75 0 01-1.06-1.06L10.94 12 6.97 8.03a.75.75 0 011.06-1.06l3.22 3.22V3a.75.75 0 01.463-.693zm1.037 11.504v5.378l2.69-2.689-2.69-2.69zm0-3.622L15.44 7.5l-2.69-2.69v5.38z\'/>'
  }];
  var closestSize = findClosestGlyphAvailable(iconList, props.iconSize || 24);

  var titleTag = function titleTag(title, titleId) {
    return title ? "<title ".concat(titleId ? "id=\"".concat(titleId, "\"") : "", ">").concat(title, "</title>") : "";
  };

  var descTag = function descTag(desc, descId) {
    return desc ? "<desc ".concat(descId ? "id=\"".concat(descId, "\"") : "", ">").concat(desc, "</desc>") : "";
  };

  var autoMirror = (_props$autoMirror = props.autoMirror) !== null && _props$autoMirror !== void 0 ? _props$autoMirror : false;
  return /*#__PURE__*/React.createElement(Icon, Object.assign({}, props, {
    autoMirror: autoMirror,
    viewBox: "0 0 ".concat(closestSize.size, " ").concat(closestSize.size),
    dangerouslySetInnerHTML: {
      __html: "".concat(titleTag(props.title, props.titleId)).concat(descTag(props.desc, props.descId)).concat(closestSize.svgContent)
    }
  }));
}
/**
 * @deprecated The name Experimental__IconBluetooth is deprecated and will be archived soon. Use IconBluetooth instead.
 */

export function Experimental__IconBluetooth(props) {
  return /*#__PURE__*/React.createElement(IconBluetooth, props);
}