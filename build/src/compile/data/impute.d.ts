import { ImputeTransform } from '../../transform';
import { UnitModel } from '../unit';
import { DataFlowNode } from './dataflow';
export declare class ImputeNode extends DataFlowNode {
    private readonly transform;
    clone(): ImputeNode;
    constructor(parent: DataFlowNode, transform: ImputeTransform);
    dependentFields(): Set<string>;
    producedFields(): Set<string>;
    private processSequence;
    static makeFromTransform(parent: DataFlowNode, imputeTransform: ImputeTransform): ImputeNode;
    static makeFromEncoding(parent: DataFlowNode, model: UnitModel): ImputeNode;
    hash(): string;
    assemble(): any[];
}
//# sourceMappingURL=impute.d.ts.map