/**
 * Utility for generating row / column headers
 */
import { SignalRef, TitleAnchor, TitleConfig } from 'vega';
import { FacetChannel } from '../../channel';
import { Config } from '../../config';
import { CoreHeader } from '../../header';
import { FacetFieldDef } from '../../spec/facet';
import { RowCol, VgComparator, VgMarkGroup, VgTitle } from '../../vega.schema';
import { Model } from '../model';
import { HeaderChannel, HeaderComponent, HeaderType, LayoutHeaderComponent, LayoutHeaderComponentIndex } from './component';
export declare function assembleTitleGroup(model: Model, channel: FacetChannel): {
    name: string;
    type: string;
    role: string;
    title: any;
};
export declare function defaultHeaderGuideAlign(headerChannel: HeaderChannel, angle: number, anchor?: TitleAnchor): {
    align: any;
} | {
    align?: undefined;
};
export declare function defaultHeaderGuideBaseline(angle: number, channel: FacetChannel): {
    baseline: string | {
        signal: string;
    };
} | {
    baseline?: undefined;
};
export declare function assembleHeaderGroups(model: Model, channel: HeaderChannel): VgMarkGroup[];
export declare function assembleLabelTitle(facetFieldDef: FacetFieldDef<string, SignalRef>, channel: FacetChannel, config: Config<SignalRef>): any;
export declare function assembleHeaderGroup(model: Model, channel: HeaderChannel, headerType: HeaderType, layoutHeader: LayoutHeaderComponent, headerComponent: HeaderComponent): {
    axes?: VgAxis[];
    encode?: {
        update: {
            [x: string]: {
                signal: string;
            };
        };
    };
    title?: any;
    from?: {
        data: string;
    };
    sort?: VgComparator;
    name: string;
    type: string;
    role: string;
};
export declare function getLayoutTitleBand(titleAnchor: TitleAnchor, headerChannel: HeaderChannel): any;
export declare function assembleLayoutTitleBand(headerComponentIndex: LayoutHeaderComponentIndex, config: Config<SignalRef>): RowCol<number>;
export declare function assembleHeaderProperties(config: Config<SignalRef>, facetFieldDef: FacetFieldDef<string, SignalRef>, channel: FacetChannel, properties: (keyof CoreHeader<SignalRef>)[], propertiesMap: Partial<Record<keyof CoreHeader<SignalRef>, keyof TitleConfig>>): Partial<VgTitle>;
//# sourceMappingURL=assemble.d.ts.map