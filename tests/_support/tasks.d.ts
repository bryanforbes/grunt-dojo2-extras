/// <reference types="sinon" />
import { SinonStub } from 'sinon';
import { Deferred } from 'intern/lib/Test';
export declare function setupWrappedAsyncStub(stub: SinonStub, dfd: Deferred<any>, callback: () => any): void;
