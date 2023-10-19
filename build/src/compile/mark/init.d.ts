import { SignalRef } from 'vega';
import { Config } from '../../config';
import { Encoding } from '../../encoding';
import { MarkDef } from '../../mark';
export declare function initMarkdef(originalMarkDef: MarkDef, encoding: Encoding<string>, config: Config<SignalRef>): MarkDef<"square" | "area" | "circle" | "image" | "line" | "rect" | "text" | "arc" | "rule" | "trail" | "bar" | "point" | "tick" | "geoshape", SignalRef>;
export declare function defaultFilled(markDef: MarkDef, config: Config<SignalRef>, { graticule }: {
    graticule: boolean;
}): any;
//# sourceMappingURL=init.d.ts.map