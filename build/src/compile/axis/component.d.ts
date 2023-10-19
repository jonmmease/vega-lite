import { Axis as VgAxis, SignalRef, Text } from 'vega';
import { AxisInternal, AxisPart, AxisPropsWithCondition, ConditionalAxisProp } from '../../axis';
import { FieldDefBase } from '../../channeldef';
import { Split } from '../split';
export type AxisComponentProps = Omit<VgAxis, 'title' | ConditionalAxisProp> & Omit<AxisPropsWithCondition<SignalRef>, 'title'> & {
    title: Text | FieldDefBase<string>[] | SignalRef;
    labelExpr: string;
    disable: boolean;
};
export declare const AXIS_COMPONENT_PROPERTIES: string[];
export declare class AxisComponent extends Split<AxisComponentProps> {
    readonly explicit: Partial<AxisComponentProps>;
    readonly implicit: Partial<AxisComponentProps>;
    mainExtracted: boolean;
    constructor(explicit?: Partial<AxisComponentProps>, implicit?: Partial<AxisComponentProps>, mainExtracted?: boolean);
    clone(): AxisComponent;
    hasAxisPart(part: AxisPart): boolean;
    hasOrientSignalRef(): boolean;
}
export interface AxisComponentIndex {
    x?: AxisComponent[];
    y?: AxisComponent[];
}
export interface AxisInternalIndex {
    x?: AxisInternal;
    y?: AxisInternal;
}
//# sourceMappingURL=component.d.ts.map