/* eslint-disable react/prop-types */
/**
 * Generated by `./scripts/prebuild/generate-icons.ts`.
 * Run `yarn generate-icons` to regenerate.
 */
import React from 'react';
import { findClosestGlyphAvailable, Icon } from "../../";
export function IconUserCircle(props) {
  var _props$autoMirror;

  /* prettier-ignore */
  var iconList = [{
    'size': 16,
    'svgContent': '<path d=\'M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1111.395 4.277 3.504 3.504 0 00-1.163-1.088l-1.523-.88a.285.285 0 01-.076-.428l.086-.104v-.001c.549-.654.962-1.449 1.02-2.422.03-.526-.055-1.074-.165-1.395a3.23 3.23 0 00-.671-1.154 3.259 3.259 0 00-4.806 0 3.23 3.23 0 00-.672 1.154c-.109.32-.195.87-.163 1.395.057.973.47 1.768 1.018 2.422l.087.105a.285.285 0 01-.076.428l-1.523.88a3.506 3.506 0 00-1.163 1.088A6.475 6.475 0 011.5 8zm2.74 5.302c.173-.334.44-.62.778-.814l1.523-.88A1.784 1.784 0 007.02 8.92l-.088-.105-.002-.002c-.399-.476-.637-.975-.671-1.548a2.71 2.71 0 01.087-.824 1.74 1.74 0 01.357-.623 1.76 1.76 0 012.594 0c.155.17.274.378.357.623a2.716 2.716 0 01.087.824c-.034.573-.272 1.072-.671 1.548l-.002.002-.088.105c-.709.85-.48 2.135.479 2.688l1.523.88c.338.195.605.48.779.814A6.47 6.47 0 018 14.5a6.47 6.47 0 01-3.76-1.198z\'/>'
  }, {
    'size': 24,
    'svgContent': '<path d=\'M11.999 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm-9 11a9 9 0 1115.763 5.938 4.998 4.998 0 00-2.105-2.381l-1.618-.935a.478.478 0 01-.193-.2.5.5 0 01.059-.544c.715-.854 1.255-1.893 1.33-3.164.021-.356 0-.708-.038-1.011a4.354 4.354 0 00-.177-.812 4.224 4.224 0 00-.878-1.509 4.262 4.262 0 00-6.284 0 4.24 4.24 0 00-.879 1.509 4.354 4.354 0 00-.176.812 5.5 5.5 0 00-.038 1.011c.075 1.271.615 2.31 1.33 3.164a.5.5 0 01.059.544.479.479 0 01-.193.2l-1.618.935a4.998 4.998 0 00-2.106 2.383A8.966 8.966 0 013 12zm3.883 7.405a3 3 0 011.46-2.116l1.62-.935c.436-.252.765-.613.975-1.025a2.5 2.5 0 00-.001-2.273 2.516 2.516 0 00-.306-.46l-.001-.002c-.516-.616-.824-1.26-.867-1.998a3.473 3.473 0 01.025-.638c.027-.21.064-.36.086-.424a2.22 2.22 0 01.46-.8 2.263 2.263 0 013.335 0c.199.217.351.484.459.8.021.064.059.214.086.424a3.5 3.5 0 01.026.638c-.044.738-.352 1.382-.868 1.998l-.001.002a2.5 2.5 0 00-.306 2.733c.21.412.538.773.975 1.025l1.618.935a3 3 0 011.461 2.114A8.96 8.96 0 0112 21a8.959 8.959 0 01-5.117-1.595z\'/>'
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
 * @deprecated The name Experimental__IconUserCircle is deprecated and will be archived soon. Use IconUserCircle instead.
 */

export function Experimental__IconUserCircle(props) {
  return /*#__PURE__*/React.createElement(IconUserCircle, props);
}