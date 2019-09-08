import { __rest } from "tslib";
export function extractTitleConfig(titleConfig) {
    const { 
    // These are non-mark title config that need to be hardcoded
    anchor, frame, offset, orient, 
    // color needs to be redirect to fill
    color } = titleConfig, 
    // The rest are mark config.
    titleMarkConfig = __rest(titleConfig, ["anchor", "frame", "offset", "orient", "color"]);
    const mark = Object.assign(Object.assign({}, titleMarkConfig), (color ? { fill: color } : {}));
    const nonMark = Object.assign(Object.assign(Object.assign(Object.assign({}, (anchor ? { anchor } : {})), (frame ? { frame } : {})), (offset ? { offset } : {})), (orient ? { orient } : {}));
    return { mark, nonMark };
}
//# sourceMappingURL=title.js.map