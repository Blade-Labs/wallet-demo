import{b as ct,H as I,r as f,c as At,A,C as m,L as l,d as ht,e as J,N as b,f as v,g as k,K as U,h as lt,i as ut,j as et,F as z,k as F,l as O,P as S,E as wt,m as dt,q as L,u as nt,v as d,w as gt,x as Et,z as E,B as x,Q as Mt,D as Bt,G as It,I as R,J as rt,M as Dt,O as st,S as ft,U as Y,V as T,W as mt,X as Qt,Y as Nt,Z as q,_ as X,$ as Ct,a0 as kt,a1 as $,a2 as tt,a3 as Tt,a4 as _t,a5 as yt}from"./index-oiI5tZcn.js";import{af as oe,ag as ae,ah as ie,ai as ce,aj as Ae,ak as he,al as le,am as ue,an as we,ao as de,a7 as ge,a8 as Ee,a9 as Me,ap as Be,aq as Ie,ar as De,as as fe,at as me,au as Qe,av as Ne,aw as Ce,ax as ke,ay as Te,az as _e,aA as ye,aB as Ge,aC as Ve,aD as be,aE as Ue,aF as Ye,a6 as Re,aH as Se,aI as xe,aG as je,aJ as Ze,aK as pe,aL as ze,aM as Fe,aN as He,aO as Pe,aP as We,aQ as Ke,aa as Je,aR as ve,ad as Oe,aS as Le,aT as qe,aU as Xe,aV as $e,aW as tn,ae as en,aX as nn,aY as rn,bI as sn,aZ as on,a_ as an,bJ as cn,ab as An,ac as hn,a$ as ln,b0 as un,b1 as wn,b2 as dn,b3 as gn,b4 as En,b5 as Mn,b6 as Bn,bH as In,b7 as Dn,b8 as fn,b9 as mn,ba as Qn,bb as Nn,bc as Cn,bd as kn,be as Tn,bf as _n,bg as yn,bh as Gn,bi as Vn,bj as bn,bk as Un,bl as Yn,bm as Rn,bn as Sn,bo as xn,bp as jn,bq as Zn,br as pn,bs as zn,bt as Fn,bu as Hn,bv as Pn,bw as Wn,bx as Kn,by as Jn,bz as vn,bA as On,bB as Ln,bC as qn,bD as Xn,bE as $n,bF as tr,bG as er}from"./index-oiI5tZcn.js";class K{constructor(t){this._code=t,Object.freeze(this)}static _fromValue(t){return new K(t)}toString(){return this._code.toString()}valueOf(){return this._code}}class Jt extends ct{constructor(t={}){super(),this._hbarAllowances=t.hbarAllowances!=null?t.hbarAllowances:[],this._tokenAllowances=t.tokenAllowances!=null?t.tokenAllowances:[],this._nftAllowances=t.nftAllowances!=null?t.nftAllowances:[]}get hbarAllowances(){return this._hbarAllowances}addHbarAllowance(t,e){const n=e instanceof I?e:new I(e);return this._adjustHbarAllowance(null,t,f(n))}_adjustHbarAllowance(t,e,n){return this._requireNotFrozen(),this._hbarAllowances.push(new At({spenderAccountId:typeof e=="string"?A.fromString(e):e instanceof m?A.fromEvmAddress(0,0,e.toSolidityAddress()):e,ownerAccountId:typeof t=="string"?A.fromString(t):t instanceof m?A.fromEvmAddress(0,0,t.toSolidityAddress()):t,amount:n})),this}grantHbarAllowance(t,e,n){const r=n instanceof I?n:new I(n);return this._adjustHbarAllowance(t,e,f(r))}revokeHbarAllowance(t,e,n){const r=n instanceof I?n:new I(n);return this._adjustHbarAllowance(t,e,f(r).negated())}get tokenAllowances(){return this._tokenAllowances}addTokenAllowance(t,e,n){return this._adjustTokenAllowance(t,null,e,f(l.fromValue(n)))}_adjustTokenAllowance(t,e,n,r){return this._requireNotFrozen(),this._tokenAllowances.push(new ht({tokenId:typeof t=="string"?J.fromString(t):t,spenderAccountId:typeof n=="string"?A.fromString(n):n instanceof m?A.fromEvmAddress(0,0,n.toSolidityAddress()):n,ownerAccountId:typeof e=="string"?A.fromString(e):e instanceof m?A.fromEvmAddress(0,0,e.toSolidityAddress()):e,amount:typeof r=="number"?l.fromNumber(r):r})),this}grantTokenAllowance(t,e,n,r){return this._adjustTokenAllowance(t,e,n,f(l.fromValue(r)))}revokeTokenAllowance(t,e,n,r){return this._adjustTokenAllowance(t,e,n,f(l.fromValue(r)))}addTokenNftAllowance(t,e){const n=typeof t=="string"?b.fromString(t):t;return this._adjustTokenNftAllowance(n,null,e)}_adjustTokenNftAllowance(t,e,n){this._requireNotFrozen();const r=typeof n=="string"?A.fromString(n):n instanceof m?A.fromEvmAddress(0,0,n.toSolidityAddress()):n,s=typeof e=="string"?A.fromString(e):e instanceof m?A.fromEvmAddress(0,0,e.toSolidityAddress()):e;let a=!1;for(const o of this._nftAllowances)if(o.tokenId.compare(t.tokenId)===0&&o.spenderAccountId!=null&&o.spenderAccountId.compare(r)===0){o.serialNumbers!=null&&o.serialNumbers.push(t.serial),a=!0;break}return a||this._nftAllowances.push(new v({tokenId:t.tokenId,spenderAccountId:r,serialNumbers:[t.serial],ownerAccountId:s,allSerials:!1,delegatingSpender:null})),this}grantTokenNftAllowance(t,e,n){const r=typeof t=="string"?b.fromString(t):t;return f(r.serial),this._adjustTokenNftAllowance(r,e,n)}revokeTokenNftAllowance(t,e,n){const r=typeof t=="string"?b.fromString(t):t;return f(r.serial),this._adjustTokenNftAllowance(new b(r.tokenId,r.serial.negate()),e,n)}addAllTokenNftAllowance(t,e){return this._adjustTokenNftAllowanceAllSerials(t,null,e,!0)}grantTokenNftAllowanceAllSerials(t,e,n){return this._adjustTokenNftAllowanceAllSerials(t,e,n,!0)}revokeTokenNftAllowanceAllSerials(t,e,n){return this._adjustTokenNftAllowanceAllSerials(t,e,n,!1)}_adjustTokenNftAllowanceAllSerials(t,e,n,r){return this._requireNotFrozen(),this._nftAllowances.push(new v({tokenId:typeof t=="string"?J.fromString(t):t,ownerAccountId:e!=null?typeof e=="string"?A.fromString(e):e instanceof m?A.fromEvmAddress(0,0,e.toSolidityAddress()):e:null,spenderAccountId:typeof n=="string"?A.fromString(n):n instanceof m?A.fromEvmAddress(0,0,n.toSolidityAddress()):n,serialNumbers:null,allSerials:r,delegatingSpender:null})),this}_validateChecksums(t){this._hbarAllowances.map(e=>e._validateChecksums(t)),this._tokenAllowances.map(e=>e._validateChecksums(t)),this._nftAllowances.map(e=>e._validateChecksums(t))}_execute(t,e){return Promise.reject(new Error("This feature has been deprecated for this class."))}_getTransactionDataCase(){throw new Error("This feature has been deprecated for this class.")}_makeTransactionData(){throw new Error("This feature has been deprecated.")}_getLogId(){return`AccountAllowanceAdjustTransaction:${this._transactionIds.current.validStart.toString()}`}}class vt{static async verifySignature(t,e,n,r){const s=await new k().setAccountId(e).execute(t);return s.key instanceof U?!1:s.key.verify(n,r)}static async verifyTransaction(t,e,n){const r=await new k().setAccountId(e).execute(t);return r.key instanceof U?!1:r.key.verifyTransaction(n)}static async verifySignatureWithSigner(t,e,n,r){const s=await new k().setAccountId(e).executeWithSigner(t);return s.key instanceof U?!1:s.key.verify(n,r)}static async verifyTransactionWithSigner(t,e,n){const r=await new k().setAccountId(e).executeWithSigner(t);return r.key instanceof U?!1:r.key.verifyTransaction(n)}}class Ot{constructor(){this._bytecode=null,this._contractCreate=new lt,this._signerPublicKeys=new Set,this._publicKeys=[],this._transactionSigners=[],this._maxChunks=null}get maxChunks(){return this._maxChunks}setMaxChunks(t){return this._maxChunks=t,this}get bytecode(){return this._bytecode}setBytecode(t){return this._bytecode=t instanceof Uint8Array?t:ut(t),this}get adminKey(){return this._contractCreate.adminKey}setAdminKey(t){return this._contractCreate.setAdminKey(t),this}get gas(){return this._contractCreate.gas}setGas(t){return this._contractCreate.setGas(t),this}get initialBalance(){return this._contractCreate.initialBalance}setInitialBalance(t){return this._contractCreate.setInitialBalance(t),this}get proxyAccountId(){return this._contractCreate.proxyAccountId}setProxyAccountId(t){return this._contractCreate.setProxyAccountId(t),this}get autoRenewPeriod(){return this._contractCreate.autoRenewPeriod}setAutoRenewPeriod(t){return this._contractCreate.setAutoRenewPeriod(t),this}get constructorParameters(){return this._contractCreate.constructorParameters}setConstructorParameters(t){return this._contractCreate.setConstructorParameters(t),this}get contractMemo(){return this._contractCreate.contractMemo}setContractMemo(t){return this._contractCreate.setContractMemo(t),this}get maxAutomaticTokenAssociation(){return this._contractCreate.maxAutomaticTokenAssociations}setMaxAutomaticTokenAssociations(t){return this._contractCreate.setMaxAutomaticTokenAssociations(t),this}get stakedAccountId(){return this._contractCreate.stakedAccountId}setStakedAccountId(t){return this._contractCreate.setStakedAccountId(t),this}get stakedNodeId(){return this._contractCreate.stakedNodeId}setStakedNodeId(t){return this._contractCreate.setStakedNodeId(t),this}get declineStakingRewards(){return this._contractCreate.declineStakingRewards}setDeclineStakingReward(t){return this._contractCreate.setDeclineStakingReward(t),this}get autoRenewAccountId(){return this._contractCreate.autoRenewAccountId}setAutoRenewAccountId(t){return this._contractCreate.setAutoRenewAccountId(t),this}sign(t){return this.signWith(t.publicKey,e=>Promise.resolve(t.sign(e)))}signWith(t,e){const n=t.toBytesRaw(),r=et(n);return this._signerPublicKeys.has(r)?this:(this._publicKeys.push(t),this._transactionSigners.push(e),this)}async execute(t,e){if(this._bytecode==null)throw new Error("cannot create contract with no bytecode");const n=t.operatorPublicKey,r=new z().setKeys(n!=null?[n]:[]).setContents(this._bytecode.subarray(0,Math.min(this._bytecode.length,2048))).freezeWith(t);await Q(r,this._publicKeys,this._transactionSigners);let s=await r.execute(t,e);const o=(await s.getReceipt(t)).fileId;if(this._bytecode.length>2048){const i=new F().setFileId(o).setContents(this._bytecode.subarray(2048)).freezeWith(t);await Q(i,this._publicKeys,this._transactionSigners),await i.execute(t,e)}if(this._contractCreate.setBytecodeFileId(o).freezeWith(t),await Q(this._contractCreate,this._publicKeys,this._transactionSigners),s=await this._contractCreate.execute(t,e),await s.getReceipt(t),n!=null){const i=new O().setFileId(o).freezeWith(t);await Q(i,this._publicKeys,this._transactionSigners),await(await i.execute(t,e)).getReceipt(t)}return s}async executeWithSigner(t){if(this._bytecode==null)throw new Error("cannot create contract with no bytecode");if(t.getAccountKey==null)throw new Error("`Signer.getAccountKey()` is not implemented, but is required for `ContractCreateFlow`");const e=await t.getAccountKey();let n;if(e instanceof S)n=e;else{const i=Object.values(e._key._key._keyData),w=new Uint8Array(i);n=S.fromBytes(w)}const r=await new z().setKeys(n!=null?[n]:[]).setContents(this._bytecode.subarray(0,Math.min(this._bytecode.length,2048))).freezeWithSigner(t);await r.signWithSigner(t),await Q(r,this._publicKeys,this._transactionSigners);let s=await r.executeWithSigner(t);const o=(await s.getReceiptWithSigner(t)).fileId;if(this._bytecode.length>2048){let i=new F().setFileId(o).setContents(this._bytecode.subarray(2048));this._maxChunks!=null&&i.setMaxChunks(this._maxChunks),i=await i.freezeWithSigner(t),await i.signWithSigner(t),await Q(i,this._publicKeys,this._transactionSigners),await i.executeWithSigner(t)}if(this._contractCreate=await this._contractCreate.setBytecodeFileId(o).freezeWithSigner(t),this._contractCreate=await this._contractCreate.signWithSigner(t),await Q(this._contractCreate,this._publicKeys,this._transactionSigners),s=await this._contractCreate.executeWithSigner(t),await s.getReceiptWithSigner(t),e!=null){const i=await new O().setFileId(o).freezeWithSigner(t);await i.signWithSigner(t),await Q(i,this._publicKeys,this._transactionSigners),await(await i.executeWithSigner(t)).getReceiptWithSigner(t)}return s}}async function Q(c,t,e){for(let n=0;n<t.length;n++)await c.signWith(t[n],e[n])}class Lt{constructor(t={}){this._ethereumData=null,this._callDataFileId=null,this._maxGasAllowance=null,t.ethereumData!=null&&this.setEthereumData(t.ethereumData),t.maxGasAllowance!=null&&this.setMaxGasAllowanceHbar(t.maxGasAllowance),this._maxChunks=null}get maxChunks(){return this._maxChunks}setMaxChunks(t){return this._maxChunks=t,this}get ethereumData(){return this._ethereumData}setEthereumData(t){return this._ethereumData=t instanceof Uint8Array?wt.fromBytes(t):t,this}get maxGasAllowance(){return this._maxGasAllowance}setMaxGasAllowance(t){return this.setMaxGasAllowanceHbar(t)}setMaxGasAllowanceHbar(t){return this._maxGasAllowance=t instanceof I?t:new I(t),this}async execute(t){if(this._ethereumData==null)throw new Error("cannot submit ethereum transaction with no ethereum data");const e=new dt,n=this._ethereumData.toBytes();if(this._maxGasAllowance!=null&&e.setMaxGasAllowanceHbar(this._maxGasAllowance),this._callDataFileId!=null){if(this._ethereumData.callData.length===0)throw new Error("call data file ID provided, but ethereum data already contains call data");e.setEthereumData(n).setCallDataFileId(this._callDataFileId)}else if(n.length<=5120)e.setEthereumData(n);else{const r=await Gt(this._ethereumData.callData,t,this._maxChunks);this._ethereumData.callData=new Uint8Array,e.setEthereumData(this._ethereumData.toBytes()).setCallDataFileId(r)}return e.execute(t)}}async function Gt(c,t,e){const n=et(c),r=(await(await new z().setContents(n.substring(0,4096)).setKeys(t.operatorPublicKey?[t.operatorPublicKey]:[]).execute(t)).getReceipt(t)).fileId;if(c.length>4096){let s=new F().setFileId(r).setContents(n.substring(4096,n.length));e!=null&&s.setMaxChunks(e),await(await s.execute(t)).getReceipt(t)}return r}const{proto:Vt}=nt;class H{constructor(t){this.currentRate=t.currentRate,this.nextRate=t.nextRate,Object.freeze(this)}static _fromProtobuf(t){return new H({currentRate:L._fromProtobuf(t.currentRate),nextRate:L._fromProtobuf(t.nextRate)})}_toProtobuf(){return{currentRate:this.currentRate._toProtobuf(),nextRate:this.nextRate._toProtobuf()}}static fromBytes(t){return H._fromProtobuf(Vt.ExchangeRateSet.decode(t))}}class C{constructor(t={}){this.min=t.min,this.max=t.max,this.constant=t.constant,this.transactionBandwidthByte=t.transactionBandwidthByte,this.transactionVerification=t.transactionVerification,this.transactionRamByteHour=t.transactionRamByteHour,this.transactionStorageByteHour=t.transactionStorageByteHour,this.contractTransactionGas=t.contractTransactionGas,this.transferVolumeHbar=t.transferVolumeHbar,this.responseMemoryByte=t.responseMemoryByte,this.responseDiskByte=t.responseDiskByte}static fromBytes(t){return C._fromProtobuf(d.proto.FeeComponents.decode(t))}static _fromProtobuf(t){return new C({min:t.min!=null?t.min:void 0,max:t.max!=null?t.max:void 0,constant:t.constant!=null?t.constant:void 0,transactionBandwidthByte:t.bpt!=null?t.bpt:void 0,transactionVerification:t.vpt!=null?t.vpt:void 0,transactionRamByteHour:t.rbh!=null?t.rbh:void 0,transactionStorageByteHour:t.sbh!=null?t.sbh:void 0,contractTransactionGas:t.gas!=null?t.gas:void 0,transferVolumeHbar:t.tv!=null?t.tv:void 0,responseMemoryByte:t.bpr!=null?t.bpr:void 0,responseDiskByte:t.sbpr!=null?t.sbpr:void 0})}_toProtobuf(){return{min:this.min!=null?this.min:void 0,max:this.max!=null?this.max:void 0,constant:this.constant!=null?this.constant:void 0,bpt:this.transactionBandwidthByte!=null?this.transactionBandwidthByte:void 0,vpt:this.transactionVerification!=null?this.transactionVerification:void 0,rbh:this.transactionRamByteHour!=null?this.transactionRamByteHour:void 0,sbh:this.transactionStorageByteHour!=null?this.transactionStorageByteHour:void 0,gas:this.contractTransactionGas!=null?this.contractTransactionGas:void 0,tv:this.transferVolumeHbar!=null?this.transferVolumeHbar:void 0,bpr:this.responseMemoryByte!=null?this.responseMemoryByte:void 0,sbpr:this.responseDiskByte!=null?this.responseDiskByte:void 0}}toBytes(){return d.proto.FeeComponents.encode(this._toProtobuf()).finish()}}class y{constructor(t={}){this.nodedata=t.nodedata,this.networkdata=t.networkdata,this.servicedata=t.servicedata,this.feeDataType=t.feeDataType}static fromBytes(t){return y._fromProtobuf(d.proto.FeeData.decode(t))}static _fromProtobuf(t){return new y({nodedata:t.nodedata!=null?C._fromProtobuf(t.nodedata):void 0,networkdata:t.networkdata!=null?C._fromProtobuf(t.networkdata):void 0,servicedata:t.servicedata!=null?C._fromProtobuf(t.servicedata):void 0,feeDataType:t.subType!=null?gt._fromCode(t.subType):void 0})}_toProtobuf(){return{nodedata:this.nodedata!=null?this.nodedata._toProtobuf():void 0,networkdata:this.networkdata!=null?this.networkdata._toProtobuf():void 0,servicedata:this.servicedata!=null?this.servicedata._toProtobuf():void 0,subType:this.feeDataType!=null?this.feeDataType.valueOf():void 0}}toBytes(){return d.proto.FeeData.encode(this._toProtobuf()).finish()}}class j{constructor(t={}){this.hederaFunctionality=t.hederaFunctionality,this.feeData=t.feeData,this.fees=t.fees}static fromBytes(t){return j._fromProtobuf(d.proto.TransactionFeeSchedule.decode(t))}static _fromProtobuf(t){return new j({hederaFunctionality:t.hederaFunctionality!=null?Et._fromCode(t.hederaFunctionality):void 0,feeData:t.feeData!=null?y._fromProtobuf(t.feeData):void 0,fees:t.fees!=null?t.fees.map(e=>y._fromProtobuf(e)):void 0})}_toProtobuf(){return{hederaFunctionality:this.hederaFunctionality!=null?this.hederaFunctionality.valueOf():void 0,feeData:this.feeData!=null?this.feeData._toProtobuf():void 0,fees:this.fees!=null?this.fees.map(t=>t._toProtobuf()):void 0}}toBytes(){return d.proto.TransactionFeeSchedule.encode(this._toProtobuf()).finish()}}class G{constructor(t={}){this.transactionFeeSchedule=t.transactionFeeSchedule,this.expirationTime=t.expirationTime}static fromBytes(t){return G._fromProtobuf(d.proto.FeeSchedule.decode(t))}static _fromProtobuf(t){return new G({transactionFeeSchedule:t.transactionFeeSchedule!=null?t.transactionFeeSchedule.map(e=>j._fromProtobuf(e)):void 0,expirationTime:t.expiryTime!=null?E._fromProtobuf(t.expiryTime):void 0})}_toProtobuf(){return{transactionFeeSchedule:this.transactionFeeSchedule!=null?this.transactionFeeSchedule.map(t=>t._toProtobuf()):void 0,expiryTime:this.expirationTime!=null?this.expirationTime._toProtobuf():void 0}}toBytes(){return d.proto.FeeSchedule.encode(this._toProtobuf()).finish()}}class P{constructor(t={}){this.current=t.currentFeeSchedule,this.next=t.nextFeeSchedule}static fromBytes(t){return P._fromProtobuf(d.proto.CurrentAndNextFeeSchedule.decode(t))}static _fromProtobuf(t){return new P({currentFeeSchedule:t.currentFeeSchedule!=null?G._fromProtobuf(t.currentFeeSchedule):void 0,nextFeeSchedule:t.nextFeeSchedule!=null?G._fromProtobuf(t.nextFeeSchedule):void 0})}_toProtobuf(){return{currentFeeSchedule:this.current!=null?this.current._toProtobuf():void 0,nextFeeSchedule:this.next!=null?this.next._toProtobuf():void 0}}toBytes(){return d.proto.CurrentAndNextFeeSchedule.encode(this._toProtobuf()).finish()}}const qt={},Xt={};class bt{constructor(t){this.publicKey=t.publicKey,this.signature=t.signature,this.accountId=t.accountId}}class Ut{constructor(){this._call=null}_setCall(t){this._call=t}unsubscribe(){this._call!=null&&this._call()}}class Z{constructor(t){this.consensusTimestamp=t.consensusTimestamp,this.contents=t.contents,this.runningHash=t.runningHash,this.sequenceNumber=t.sequenceNumber,Object.freeze(this)}static _fromProtobuf(t){return new Z({consensusTimestamp:E._fromProtobuf(t.consensusTimestamp),contents:t.message!=null?t.message:new Uint8Array,runningHash:t.runningHash!=null?t.runningHash:new Uint8Array,sequenceNumber:t.sequenceNumber!=null?t.sequenceNumber instanceof l?t.sequenceNumber:l.fromValue(t.sequenceNumber):l.ZERO})}_toProtobuf(){return{consensusTimestamp:this.consensusTimestamp._toProtobuf(),message:this.contents,runningHash:this.runningHash,sequenceNumber:this.sequenceNumber}}}class V{constructor(t){this.consensusTimestamp=t.consensusTimestamp,this.contents=t.contents,this.runningHash=t.runningHash,this.sequenceNumber=t.sequenceNumber,this.chunks=t.chunks,this.initialTransactionId=t.initialTransactionId,Object.freeze(this)}static _ofSingle(t){return new V({consensusTimestamp:E._fromProtobuf(t.consensusTimestamp),contents:t.message!=null?t.message:new Uint8Array,runningHash:t.runningHash!=null?t.runningHash:new Uint8Array,sequenceNumber:t.sequenceNumber!=null?t.sequenceNumber instanceof l?t.sequenceNumber:l.fromNumber(t.sequenceNumber):l.ZERO,initialTransactionId:t.chunkInfo!=null&&t.chunkInfo.initialTransactionID!=null?x._fromProtobuf(t.chunkInfo.initialTransactionID):null,chunks:[Z._fromProtobuf(t)]})}static _ofMany(t){const e=t.length,n=t[e-1],r=E._fromProtobuf(n.consensusTimestamp),s=n.runningHash,a=n.sequenceNumber!=null?n.sequenceNumber instanceof l?n.sequenceNumber:l.fromValue(n.sequenceNumber):l.ZERO;t.sort((h,M)=>(h!=null&&h.chunkInfo!=null&&h.chunkInfo.number!=null?h.chunkInfo.number:0)<(M!=null&&M.chunkInfo!=null&&M.chunkInfo.number!=null?M.chunkInfo.number:0)?-1:1);const o=t.map(h=>Z._fromProtobuf(h)),i=o.map(h=>h.contents.length).reduce((h,M)=>h+M,0),w=new Uint8Array(i);let u=0;t.forEach(h=>{w.set(h.message,u),u+=h.message.length});let g=null;return t.length>0&&t[0].chunkInfo!=null&&t[0].chunkInfo.initialTransactionID!=null&&(g=x._fromProtobuf(t[0].chunkInfo.initialTransactionID)),new V({consensusTimestamp:r,contents:w,runningHash:s,sequenceNumber:a,chunks:o,initialTransactionId:g})}}class $t extends Mt{constructor(t={}){super(),this._topicId=null,t.topicId!=null&&this.setTopicId(t.topicId),this._startTime=null,t.startTime!=null&&this.setStartTime(t.startTime),this._endTime=null,t.endTime!=null&&this.setEndTime(t.endTime),this._limit=null,t.limit!=null&&this.setLimit(t.limit),this._errorHandler=(e,n)=>{console.error(`Error attempting to subscribe to topic: ${this._topicId!=null?this._topicId.toString():""}`)},t.errorHandler!=null&&(this._errorHandler=t.errorHandler),this._listener=null,this._completionHandler=()=>{this._logger&&this._logger.info(`Subscription to topic ${this._topicId!=null?this._topicId.toString():""} complete`)},t.completionHandler!=null&&(this._completionHandler=t.completionHandler),this._retryHandler=e=>{if(e!=null){if(e instanceof Error)return!0;switch(e.code){case 13:return Bt.test(e.details.toString());case 5:case 8:case 14:case 17:return!0;default:return!1}}return!1},t.retryHandler!=null&&(this._retryHandler=t.retryHandler),this._attempt=0,this._handle=null,this.setMaxBackoff(8e3)}get topicId(){return this._topicId}setTopicId(t){return this.requireNotSubscribed(),this._topicId=typeof t=="string"?It.fromString(t):t.clone(),this}get startTime(){return this._startTime}setStartTime(t){return this.requireNotSubscribed(),this._startTime=t instanceof E?t:t instanceof Date?E.fromDate(t):new E(t,0),this}get endTime(){return this._endTime}setEndTime(t){return this.requireNotSubscribed(),this._endTime=t instanceof E?t:t instanceof Date?E.fromDate(t):new E(t,0),this}get limit(){return this._limit}setLimit(t){return this.requireNotSubscribed(),this._limit=t instanceof l?t:l.fromValue(t),this}setErrorHandler(t){return this._errorHandler=t,this}setCompletionHandler(t){return this.requireNotSubscribed(),this._completionHandler=t,this}setMaxAttempts(t){return this.requireNotSubscribed(),this._maxAttempts=t,this}setMaxBackoff(t){return this.requireNotSubscribed(),this._maxBackoff=t,this}subscribe(t,e,n){return this._handle=new Ut,this._listener=n,e!=null&&(this._errorHandler=e),this._makeServerStreamRequest(t),this._handle}_makeServerStreamRequest(t){const e=new Map,n=d.com.hedera.mirror.api.proto.ConsensusTopicQuery.encode({topicID:this._topicId!=null?this._topicId._toProtobuf():null,consensusStartTime:this._startTime!=null?this._startTime._toProtobuf():null,consensusEndTime:this._endTime!=null?this._endTime._toProtobuf():null,limit:this._limit}).finish(),r=t._mirrorNetwork.getNextMirrorNode().getChannel().makeServerStreamRequest("ConsensusService","subscribeTopic",n,s=>{const a=d.com.hedera.mirror.api.proto.ConsensusTopicResponse.decode(s);if(this._limit!=null&&this._limit.gt(0)&&(this._limit=this._limit.sub(1)),this._startTime=E._fromProtobuf(a.consensusTimestamp).plusNanos(1),a.chunkInfo==null||a.chunkInfo!=null&&a.chunkInfo.total===1)this._passTopicMessage(V._ofSingle(a));else{const o=a.chunkInfo,i=o.initialTransactionID,w=o.total,u=x._fromProtobuf(i).toString();let g=[];const h=e.get(u);if(h==null?e.set(u,g):g=h,g.push(a),g.length===w){const M=V._ofMany(g);e.delete(u),this._passTopicMessage(M)}}},s=>{const a=s instanceof Error?s.message:s.details;if(this._attempt<this._maxAttempts&&this._retryHandler(s)){const o=Math.min(250*2**this._attempt,this._maxBackoff);console.warn(`Error subscribing to topic ${this._topicId!=null?this._topicId.toString():"UNKNOWN"} during attempt ${this._attempt}. Waiting ${o} ms before next attempt: ${a}`),this._attempt+=1,setTimeout(()=>{this._makeServerStreamRequest(t)},o)}else this._errorHandler(null,new Error(a))},this._completionHandler);this._handle!=null&&this._handle._setCall(()=>r())}requireNotSubscribed(){if(this._handle!=null)throw new Error("Cannot change fields on an already subscribed query")}_passTopicMessage(t){try{if(this._listener!=null)this._listener(t);else throw new Error("(BUG) listener is unexpectedly not set")}catch(e){this._errorHandler(t,e)}}}class W{constructor(t,e,n){const r=typeof e=="string"?R.fromStringDer(e):e;this.publicKey=r.publicKey,this.signer=s=>Promise.resolve(r.sign(s)),this.provider=n,this.accountId=typeof t=="string"?A.fromString(t):t}static createRandomED25519(){const t=R.generateED25519(),n=t.publicKey.toAccountId(0,0);return Promise.resolve(new W(n,t))}static createRandomECDSA(){const t=R.generateECDSA(),n=t.publicKey.toAccountId(0,0);return Promise.resolve(new W(n,t))}getProvider(){return this.provider}getAccountId(){return this.accountId}getAccountKey(){return this.publicKey}getLedgerId(){return this.provider==null?null:this.provider.getLedgerId()}getNetwork(){return this.provider==null?{}:this.provider.getNetwork()}getMirrorNetwork(){return this.provider==null?[]:this.provider.getMirrorNetwork()}async sign(t){const e=[];for(const n of t)e.push(new bt({publicKey:this.publicKey,signature:await this.signer(n),accountId:this.accountId}));return e}getAccountBalance(){return this.call(new rt().setAccountId(this.accountId))}getAccountInfo(){return this.call(new k().setAccountId(this.accountId))}getAccountRecords(){return this.call(new Dt().setAccountId(this.accountId))}signTransaction(t){return t.signWith(this.publicKey,this.signer)}checkTransaction(t){const e=t.transactionId;if(e!=null&&e.accountId!=null&&e.accountId.compare(this.accountId)!=0)throw new Error("transaction's ID constructed with a different account ID");if(this.provider==null)return Promise.resolve(t);const n=(t.nodeAccountIds!=null?t.nodeAccountIds:[]).map(s=>s.toString()),r=Object.values(this.provider.getNetwork()).map(s=>s.toString());if(!n.reduce((s,a)=>s&&r.includes(a),!0))throw new Error("Transaction already set node account IDs to values not within the current network");return Promise.resolve(t)}populateTransaction(t){if(t._freezeWithAccountId(this.accountId),t.transactionId==null&&t.setTransactionId(x.generate(this.accountId)),t.nodeAccountIds!=null&&t.nodeAccountIds.length!=0)return Promise.resolve(t.freeze());if(this.provider==null)return Promise.resolve(t);const e=Object.values(this.provider.getNetwork()).map(n=>typeof n=="string"?A.fromString(n):n);return st(e),t.setNodeAccountIds(e.slice(0,(e.length+3-1)/3)),Promise.resolve(t.freeze())}call(t){if(this.provider==null)throw new Error("cannot send request with an wallet that doesn't contain a provider");return this.provider.call(t._setOperatorWith(this.accountId,this.publicKey,this.signer))}}class te{constructor(t){this._logger=ft({level:t.toString(),transport:{target:"pino-pretty",options:{translateTime:"SYS:dd-mm-yyyy HH:MM:ss",ignore:"pid,hostname"}}}),this._previousLevel=t}setLogger(t){return this._logger=t,this}setLevel(t){return this._previousLevel=Y._fromString(this._logger.level),this._logger.level=t.toString(),this}get level(){return Y._fromString(this._logger.level)}get levels(){return this._logger.levels.labels}setSilent(t){return t?this._logger.level=Y.Silent.toString():this._logger.level=this._previousLevel.toString(),this}get silent(){return this._logger.level==Y.Silent.toString()}trace(t){this._logger.trace(t)}debug(t){this._logger.debug(t)}info(t){this._logger.info(t)}warn(t){this._logger.warn(t)}error(t){this._logger.error(t)}fatal(t){this._logger.fatal(t)}}const ee={Mainnet:"mainnet",Testnet:"testnet",Previewnet:"previewnet"},Yt=/^(\S+):(\d+)$/;class _{constructor(t={}){if(t.address!=null){const e=Yt.exec(t.address);if(e==null)throw new Error(`failed to parse address: ${t.address}`);this._address=e[1],this._port=e[2]!=null?parseInt(e[2]):null}else if(t.host!=null&&t.port!=null)this._address=t.host,this._port=t.port;else throw new Error(`failed to create a managed node address: ${JSON.stringify(t)}`);Object.freeze(this)}static fromString(t){return new _({address:t})}toInsecure(){let t=this.port===50212?50211:this.port;return new _({host:this.address,port:t})}toSecure(){let t=this.port===50211?50212:this.port;return new _({host:this.address,port:t})}get address(){return this._address}get port(){return this._port}isTransportSecurity(){return this._port==50212||this._port==443}toString(){return this.port==null?this.address:`${this.address}:${this.port}`}}class ot{constructor(t={}){if(t.newNode!=null)this._address=typeof t.newNode.address=="string"?_.fromString(t.newNode.address):t.newNode.address,this._cert=void 0,this._channel=null,this._channelInitFunction=t.newNode.channelInitFunction,this._lastUsed=Date.now(),this._readmitTime=Date.now(),this._useCount=0,this._badGrpcStatusCount=0,this._minBackoff=8e3,this._maxBackoff=1e3*60*60,this._currentBackoff=this._minBackoff;else if(t.cloneNode!=null)this._address=t.cloneNode.address,this._cert=t.cloneNode.node._cert,this._channel=t.cloneNode.node._channel,this._channelInitFunction=t.cloneNode.node._channelInitFunction,this._currentBackoff=t.cloneNode.node._currentBackoff,this._lastUsed=t.cloneNode.node._lastUsed,this._readmitTime=t.cloneNode.node._readmitTime,this._useCount=t.cloneNode.node._useCount,this._badGrpcStatusCount=t.cloneNode.node._badGrpcStatusCount,this._minBackoff=t.cloneNode.node._minBackoff,this._maxBackoff=t.cloneNode.node._minBackoff;else throw new Error(`failed to create ManagedNode: ${JSON.stringify(t)}`)}getKey(){throw new Error("not implemented")}setCert(t){return this}get address(){return this._address}get attempts(){return this._badGrpcStatusCount}get minBackoff(){return this._minBackoff}setMinBackoff(t){return this._currentBackoff<=t&&(this._currentBackoff=t),this._minBackoff=t,this}get maxBackoff(){return this._maxBackoff}setMaxBackoff(t){return this._currentBackoff<=t&&(this._currentBackoff=t),this._maxBackoff=t,this}getChannel(){return this._useCount++,this.__lastUsed=Date.now(),this._channel!=null?this._channel:(this._channel=this._channelInitFunction(this.address.toString(),this._cert),this._channel)}isHealthy(){return this._readmitTime<=Date.now()}increaseBackoff(){this._currentBackoff=Math.min(this._currentBackoff*2,this._maxBackoff),this._readmitTime=Date.now()+this._currentBackoff}decreaseBackoff(){this._currentBackoff=Math.max(this._currentBackoff/2,this._minBackoff)}getRemainingTime(){return this._readmitTime-this._lastUsed}backoff(){return new Promise(t=>setTimeout(t,this.getRemainingTime()))}compare(t){let e=this.getRemainingTime()-t.getRemainingTime();return e!=0||(e=this._currentBackoff-t._currentBackoff,e!=0)||(e=this._badGrpcStatusCount-t._badGrpcStatusCount,e!=0)||(e=this._useCount-t._useCount,e!=0)?e:this._lastUsed-t._lastUsed}close(){this._channel!=null&&this._channel.close(),this._channel=null}}const Rt={"0.0.3":`-----BEGIN CERTIFICATE-----
MIICnzCCAiWgAwIBAgIUenyqJ4UaFBbwokatcUqAwW3o3rswCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDAxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjIyMTU4WhgPMjI5NTA2MDcyMjIxNThaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAwMR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEm5b1+oG9R0qt
zM7UZnS5l/xxUNHIHq5+NAvtlviCpJL19jrW9+/UOy00Qqc6vS6tS1hS+dNJmpiZ
FN0EHew4VDR7ACnL4LDJKmIHWjQ0iwvZo5kCpO0r9BtPN5FvaSxyo1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQUeciBviJtjeuue0GPf1xllNw7qvYwCgYIKoZIzj0EAwMDaAAwZQIw
JeG0H2HdsI1VhOYmJmYlNeKCNgAk+LMorzPmsIInVBO2HK2IrKfpReWDS/m5j51V
AjEAxKBxDezJDqAZHTkTXCg+X9Q9V6J6M5yDy5IS90aCWEo+W8C1Hc6hkn2/NrvT
PhwK
-----END CERTIFICATE-----
`,"0.0.4":`-----BEGIN CERTIFICATE-----
MIICnjCCAiWgAwIBAgIUUfjO8LyXBdzrzbAe1Yl+d34IDsIwCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDExHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjIyMTU5WhgPMjI5NTA2MDcyMjIxNTlaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAxMR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAERwfj4ZtD/wRb
f8h9NEMu2sQoLFK9Gc4SQ8o6j4ccLYGdgOoVoq4zzy4Jr7ZtCTuACfCfhp7wy8ra
+6cugccaSd6AzOKRSVZvQvkUTFKIoAOKwp6IhlU48rmi80MT07eyo1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQUCGhfVMP72Y0G5XUksE3dPgFHrzkwCgYIKoZIzj0EAwMDZwAwZAIw
cpX7irZWyuujWRYUs9kLNgB2YLQK+n8r1fH+tJg3+zkcZ2pzhGWmpUUZWOzsDqGC
AjBUbhlmrTc4LrEBN0EMiRYzfPD2kBZxusLBDIg/aDYERCMcsFvF1T9SsuasF/B+
cI8=
-----END CERTIFICATE-----
`,"0.0.5":`-----BEGIN CERTIFICATE-----
MIICnjCCAiWgAwIBAgIUIo4L+7xe/mUmpKy4qOAQEIxz8UMwCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDIxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjIyMTU5WhgPMjI5NTA2MDcyMjIxNTlaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAyMR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEoFgCjb1/7BUJ
EXKIPJLlsOSp/39G8l92wOSr7h+Py7iwVwu68H2ykftMOq3tRwDRXZHz7ViqcIZ9
lfMcS8sbRtVm9tBbNciVUqTLWX9nHr/c4PhKEi+LdgtSUr2+hHiWo1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQUMR89BHC3yKC4YwUgyBVQUGBCprQwCgYIKoZIzj0EAwMDZwAwZAIw
Us2BdslcScIwcmxoB60K7/1BPfQI8ccDZIMosas6U2zhinTnRKik1T0i+uHhLl8e
AjA5apAwSPTnP7j3Bo/FOCkfjTqOjwp2lUqzDJYKolKsHX2sy8hX9MkYiY46SaJ1
P+0=
-----END CERTIFICATE-----
`,"0.0.6":`-----BEGIN CERTIFICATE-----
MIICnzCCAiWgAwIBAgIUWpji03mJsR/16MP8BrOfpNz7aQMwCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDMxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjIyMTU5WhgPMjI5NTA2MDcyMjIxNTlaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAzMR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE+KDMC99Q1rWi
+FwlytGMS5qzTDytCvk+PzdONnDZ/weNSv4j3BXSo588IwhIxLtfcBlyo/+PmE1c
5qGFXuMoZjGr22VpvogkRgPejD+Gawb4A2XHkMCD8NmO66uPw97po1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQUN1qEI4eQ+WHavb9ypGV417NvhGowCgYIKoZIzj0EAwMDaAAwZQIw
L0khkiDOiFRa3wx9l5JNjaSRePPc3ZaTaJQkPYeauMaLWEvmC/0e2/e9gPm5qJ8E
AjEAgXQMko3vNB8VRN4XjyFJa8p/muZ/tLA15wPnb/boUmiZ+njDDSaiu8tIQrTB
gHW6
-----END CERTIFICATE-----
`,"0.0.7":`-----BEGIN CERTIFICATE-----
MIICnjCCAiWgAwIBAgIUEJ7AJvrqDUBNKbssGoJtww3v+WowCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDQxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjIyMjAwWhgPMjI5NTA2MDcyMjIyMDBaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDA0MR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEfgJ8w9GUWM3y
yusedZOFQrgXFVsdtRsMSHbqyVCN6+Wow6SIjy29GRMSP5R2aswupFgh6lXJRqnr
tY+hpRumFKsmSo+5+l8DBcql4rzs4utESTehM+Cq9LYc4A1z0UIRo1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQUMCm3UqSbT01Zr23hLzCGnXbDa+MwCgYIKoZIzj0EAwMDZwAwZAIw
FNcN7mKJo/bwpRT+y/KbYkCJsvljdbXzJOXXQ3e6J6R+0vLqcT25J/ry6pBZMUwR
AjAswu29z8KJCSxnWwnPpHDmkRT15zG/xS+pAmx3oeQSqp6ZD7qpdJE8zzhbfe5x
wAc=
-----END CERTIFICATE-----
`},St={"0.0.3":`-----BEGIN CERTIFICATE-----
MIICoDCCAiWgAwIBAgIUMkNeM6Sbk9ZFYmRWZmSgTQHHWyUwCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDAxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjIyMjU4WhgPMjI5NTA2MDcyMjIyNThaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAwMR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAETLLoIMZjEhDP
KLHS7bJT4OTYGgR/8mB65yfx3KqMLYFF+q2SpWkIrYgUQLVEUEibVSnLlxRUzH7R
szcKynpTwh0W0yfWanZKQg+RWoKkEYlu2GvkUtJb8cRVM9NLmJUeo1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQUSrIepwFx8gZ8/G+WGaxs6GgkMtQwCgYIKoZIzj0EAwMDaQAwZgIx
AJxC0fjB1OrF9vkCKsfnPS3Z+1hscrZhEDG38NxdLEAfPQ5VmyrSBgJy11FBp8yB
0QIxAKzbge3Lf7iBMwYwm+2M/GiVgmHNMLdtrYuerWpdbYOHgRNAkyt57JoThn0u
Tzkd5Q==
-----END CERTIFICATE-----
`,"0.0.4":`-----BEGIN CERTIFICATE-----
MIICnzCCAiWgAwIBAgIUGLriiLPacglp6U+BtJcF9TI7xEUwCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDExHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjIyMjU4WhgPMjI5NTA2MDcyMjIyNThaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAxMR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEXhR9cb6mH9AE
GNSGk3OkxN1C/JW49ddYZ/XWD4InjS8D1kXmB1Y39v1mF0L1loG6lDT8Zp46zrj7
5zMONXZeD2b0mx5hHhtllPTpJ10Tlt9FDoyFbKwPRQ/SAPNADfuzo1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQUCaKtx8RZ1XJO9rmZMbIcFJZkcv4wCgYIKoZIzj0EAwMDaAAwZQIx
APhDW0VrNSmq8hODdhIVV4GyvpYhp3Fksg+sZr3DmUatwn+ptj+X+9IzgPl9QYE3
kAIwcy2ixgNkjC/DYVmgT4MpUnLneLK0gA23Vj2QwACaTH99H/ybqUH7srj0POB9
5wvV
-----END CERTIFICATE-----
`,"0.0.5":`-----BEGIN CERTIFICATE-----
MIICoDCCAiWgAwIBAgIUEMduome38hvAuIKoGjg/tHatQZMwCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDIxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjIyMjU4WhgPMjI5NTA2MDcyMjIyNThaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAyMR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEl1olzP1L4WgX
d7aujOXmTQZt3tEOGzkMa3S6qJwISLBI7Tb9KaW8zYIe9xWBVAwphCbD0wn9xpPV
wMr4uTn+JocugYBbe2YoUGzWTkxWnOEKXbh/nQJCe3XE/C0FY8fAo1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQULfw7LVtTiUDVIvZwhhWW0soQtSQwCgYIKoZIzj0EAwMDaQAwZgIx
AID5v3Lo2zlnpFzTdJFqBpw6fV+vmpI+JBj61f264J/uHMbELiu2dwxhwWaMElX7
wQIxAJxccFr7Bf1KjaMyT2dq75zQzFuKDMj9x92yAqM2Gas/Yay+Ccpm8FBn7BFl
ke1Qwg==
-----END CERTIFICATE-----
`,"0.0.6":`-----BEGIN CERTIFICATE-----
MIICnzCCAiWgAwIBAgIUcCg/gZGxk/UjYkhW1jg4Zki+jfwwCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDMxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjIyMjU5WhgPMjI5NTA2MDcyMjIyNTlaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAzMR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEOSsXBZicyrxy
tHJHKh04Mvu6SKM49IC7rAXw5CjlOod5OTeHg0fa5vVoBME4mlWP+LsMMqf8welC
20b4wMwUC1Hnd66v8crX8L1wvZ9EmKLTvhTd65bS5zloMiSbpdF2o1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQUgMMwqaGuUT6JCH0gsbqullaW6/QwCgYIKoZIzj0EAwMDaAAwZQIx
AMggJ1eMmT7C14z7wHCsOdDOgmzg733+a5dsuAcxknoz/sQLN8wqy1JxShWgEIA/
xwIweTDAX/4JZnr3mlSC57lYXbHk/c319VfN9Ybxg0FaDXa8tOqg7Ml6Uu3IGujQ
a3eY
-----END CERTIFICATE-----
`,"0.0.7":`-----BEGIN CERTIFICATE-----
MIICoDCCAiWgAwIBAgIUXADwhiD5acpA66GPoXuAevBfZBIwCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDQxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjIyMjU5WhgPMjI5NTA2MDcyMjIyNTlaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDA0MR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEBgLhLiGz8qWu
50vzxSyQkrmhpxuHBJhpGzA0WaUJdAUlaUOL1753ZxxA08wUmcozILNEnMaQ+ROn
+fuGctv90ZcrSekODjxjbKH2ntVLP8xwkBRCTJ0WRBNenxxBD438o1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQUhYOOD/z3ty9O5GuSTXnyujIqBRgwCgYIKoZIzj0EAwMDaQAwZgIx
AMxbZ4gvkXaORauQFUPRYwOJrihWIA+3ttGDua//YfEbshytQ8b4L65W/1Xs8eOd
DwIxAImwTzRam8tScdOzmuGgPcML2lkETMpMA2rZYVyEL/VNktIxvB2oE+4M0v5l
r8IbTA==
-----END CERTIFICATE-----
`},xt={"0.0.3":`-----BEGIN CERTIFICATE-----
MIICnjCCAiWgAwIBAgIUZWoT9TlgbZy+syLbqZhO5++1cVgwCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDAxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjI0MjQ3WhgPMjI5NTA2MDcyMjQyNDdaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAwMR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE8NhDGK/dgWvD
RHEJ8af7CBDdhvujH5XIrLen33GTLY8DbJwJW2jdsLGx3+DRVVmeNQZxCbcGj0e2
IyypkG6s0mtnmeymD8mI3JU8m1aZiuIptZSH3Bw1BNn2hKU4x42co1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQUbYGliiNtMkGaroQxXWCl+kYHDBwwCgYIKoZIzj0EAwMDZwAwZAIw
ImTOEYu0y73Ggt4NAjFFsN2sV7CsEL3NoJqJ7MZ6U+b3Ax1hnc1eE0oei6xH4VNF
AjBB4iZNvAn6Esiu4k+JPlYuMesplgMv33fU5GsfvLIovN8pOJDe0c+CUmsnfGbP
OsQ=
-----END CERTIFICATE-----
`,"0.0.4":`-----BEGIN CERTIFICATE-----
MIICnjCCAiWgAwIBAgIUEGWU0F4aKffY+le55ahQaScDYDwwCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDExHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjI0MjQ3WhgPMjI5NTA2MDcyMjQyNDdaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAxMR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEqW6TqxMmjL3h
9AVBgfVaFRZlXUcyWa+QYhzxr8sksgJqfDbmGtdaHIdiL1qCPuC4v4G3qrAbXZRm
TYNo5Lz0X2ic5pES6DbacdjOgHH7TAY4BVKkuVrydln2jjhh7SmBo1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQUcBlY5a1rV0H1iQuJMwWxrTEWQ6MwCgYIKoZIzj0EAwMDZwAwZAIw
R+mY9B2U26yD44s03hjz4TlpkyXbVfmgL3Elqo3lrWDJtvT4zpjGjxg3Q1P3SpZQ
AjAy9DRVrZPzq8iq5Ir7B8XgLQH5QL7SQ3tUL1HzXJYOukvn9Ofr+QADhpb0oJLB
Kug=
-----END CERTIFICATE-----
`,"0.0.5":`-----BEGIN CERTIFICATE-----
MIICnjCCAiWgAwIBAgIUbxzfD3ihIK5snumqqKtqtcBPSSQwCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDIxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjI0MjQ3WhgPMjI5NTA2MDcyMjQyNDdaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAyMR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEWoAjWmW7vpUr
U69wRbK9Firons4kRoin6N8lMjCD+xzsrsT6/wycpzC0F8fxfIvOYSMWRtinhOKl
ZAxp60OWYP87iH7RqWBAnHIJZj/znKTGd+8Sqp/RVQmButFHg/+Go1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQUTMtwuDzI4Hun7SPp2Nb3scjUUXkwCgYIKoZIzj0EAwMDZwAwZAIw
HKAgaX39Lgc+4/xHXzZR9mi2p3pf6CDO85Xm56UR/t48HnBkRorR3TFCBXACeIIs
AjBtXglpDnRf6M+nVBlxLdwCQXiwr6vQJ9+dUo+suNkZ1JBmtHypyIqkG2yT4z9C
Lcs=
-----END CERTIFICATE-----
`,"0.0.6":`-----BEGIN CERTIFICATE-----
MIICoDCCAiWgAwIBAgIUPwXdJvpCJYO9lm6uQN3S1aBi3PswCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDMxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjI0MjQ4WhgPMjI5NTA2MDcyMjQyNDhaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAzMR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE8PwBQ0ywu+0t
eIYbaiKwzGEScQMOYFYAMw49++6bGRiH/XZjsypqlJWy3F/mB3+HNVZsqgB61Jpj
2p98Afkl57MYWhWM29t/x5qAQ8LhKGu2k+BOnCcvHDU2pR+fmFSOo1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQUgI4r3/iwzFN2wh76y/4XDBk7wgkwCgYIKoZIzj0EAwMDaQAwZgIx
ANAjwHdTWYMCCjrtb2NWzDpsKjf3m6ZcaxbEcM1ta/Zji/4x0+VRZa917CkfaEsr
LAIxAK/erPvIXRU9eNaK/TAQqppSRaF35G6iNnYjQZzfjTU2DczhT4oCjKzGoCHT
kI1zOg==
-----END CERTIFICATE-----
`,"0.0.7":`-----BEGIN CERTIFICATE-----
MIICnzCCAiWgAwIBAgIUXUGzJj13Ck2Cp0BKauLOdzgCPwIwCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDQxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjI0MjQ4WhgPMjI5NTA2MDcyMjQyNDhaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDA0MR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE8Ee64Tbu53i/
KsuLOJG3GQ4e9gQ+9BtEy7U8kfFzRHh6Ejn7LOW38ZdKX1HP4zXuUusjNvytqDvr
7eclitqnegcEOkIeFK3wQwBoNILuq+r4LRVi19V+AIcl5w3qkJvIo1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQU2tbfu7hd7USgbS2WsG/6BduKEAMwCgYIKoZIzj0EAwMDaAAwZQIw
Rw/BOLoScmU7P/1JnNPsGarmnvcuJrokAv1wk6j8s5LGuQHReX+d+O3RPLggwcAY
AjEAjoZnt9simul4cVcVy4G/0f39atanUva17gyzlYXEYx7B6UloxLeEcZhlbBf8
GjRf
-----END CERTIFICATE-----
`,"0.0.8":"","0.0.9":"","0.0.10":`-----BEGIN CERTIFICATE-----
MIICnzCCAiWgAwIBAgIUNauEDBCmP9igXLWtRpzkQqIGo/wwCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDcxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjI0MjQ5WhgPMjI5NTA2MDcyMjQyNDlaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDA3MR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEjbkoJBshQXUy
qm5K8ldpTDR94Wk8iEM7QwHfceIxK5pPgaVGRkoJyVLSK5LMH4jyaIHUrtA0lIBQ
o0MsYkq7TOOm7+vo1Yrd8EMbu5StMb3gsXUrj7E/SBKIxULak6hCo1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQUyKHMzIBPRV/mrgG7tIjzOiw2xbUwCgYIKoZIzj0EAwMDaAAwZQIx
ANsigVtLgTdKWBPVJPstWA0H8yihf0/dmM3GO4qp5keGTWz/O3tnom4iDB6eSrcA
jwIwU82Dh+Wxl3kAD3YJH5VhlfHTm1rPlJETBHZgvPBOYqippao6+WZFEpn2/IDC
NTjn
-----END CERTIFICATE-----
`,"0.0.11":`-----BEGIN CERTIFICATE-----
MIICnjCCAiWgAwIBAgIUWtnJm2kswnXYu7/S5BnnTQiDRcUwCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDgxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjI0MjUwWhgPMjI5NTA2MDcyMjQyNTBaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDA4MR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEjY9Rl+s00xFV
tdTpAixLR4kJIGLfSLOdm+ofU/KuKMRSz5x1ORhIicppKZK24U5WLGXQU1fKLvxX
OmqwqL+6oAONmiHszqVdhWne4QPUba0yw7rf1/OI+IFF1HRK3shQo1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQUb/htoTodbq5hjP5RNlQ0rkKwWB0wCgYIKoZIzj0EAwMDZwAwZAIw
bO+9yArr21XKXjYHPadEAYINDxgXEC3W8e3X6MJsHCIZITddWWOyXRNFhz504vN0
AjB8aBuhrKcg1b4CrQDZQcosyVPUGIZKkXdQFfbVdivKrGZvqLS+GdPLd3v2MmHY
orA=
-----END CERTIFICATE-----
`,"0.0.12":`-----BEGIN CERTIFICATE-----
MIICoDCCAiWgAwIBAgIUHBsegV0bKtwpHRoOnnhbK7CTHxMwCgYIKoZIzj0EAwMw
gYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw
MDAwMDkxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz
MjI0MjUwWhgPMjI5NTA2MDcyMjQyNTBaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE
CAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G
A1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDA5MR8wHQYJKoZIhvcNAQkBFhBh
ZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEK+ZAs/00RXaj
buQJJy4zwr/YTj9h5V+vbY7sq9Z1RByEwTRRQOI3OuzzMq1EWKkVJKF/QF5b4yda
x6W9O/NT4EjBXH5XR5X1V6h7aT01YBqsxgMxuUP7kw9K+fW4k6Zao1QwUjAPBgNV
HREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd
BgNVHQ4EFgQUKbecoYirLjf2O2oPkoggEE2P7FcwCgYIKoZIzj0EAwMDaQAwZgIx
AP67wsVOkeFo/9QRo+PnZhzEvjOZ/+IUoUhimdljcVwn79tzNP+obf7VW3Oq1wH7
4wIxAL65+WmMTMoI2cN7TCiL7G/W2ChDsASeHfaP/4e4ZViNONWotlY9i9aS3Kwt
LTea1Q==
-----END CERTIFICATE-----
`,"0.0.13":`-----BEGIN CERTIFICATE-----
MIICoDCCAiegAwIBAgIUBNxMZRKru9jzFA8zsOAI4xkMFCMwCgYIKoZIzj0EAwMw
gYUxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExETAPBgNVBAMMCDAw
MDAwMDEwMR8wHQYJKoZIhvcNAQkBFhBhZG1pbkBoZWRlcmEuY29tMCAXDTIxMDgy
MzIyNDI1MFoYDzIyOTUwNjA3MjI0MjUwWjCBhTELMAkGA1UEBhMCVVMxCzAJBgNV
BAgMAlRYMRMwEQYDVQQHDApSaWNoYXJkc29uMQ8wDQYDVQQKDAZIZWRlcmExDzAN
BgNVBAsMBkhlZGVyYTERMA8GA1UEAwwIMDAwMDAwMTAxHzAdBgkqhkiG9w0BCQEW
EGFkbWluQGhlZGVyYS5jb20wdjAQBgcqhkjOPQIBBgUrgQQAIgNiAAShUi9sglwb
0U8QUrGOXJuHRXA9HP8RypkgNBwNRs1YcmPLcuwK70unWlkB81M44IQ7z/dG/0cW
hfFdRI5x4jAeiUFivmWmMLT6lJMPxJ0BkWTGVFVwI3SKcgSvHP9pNS2jVDBSMA8G
A1UdEQQIMAaHBH8AAAEwCwYDVR0PBAQDAgSwMBMGA1UdJQQMMAoGCCsGAQUFBwMB
MB0GA1UdDgQWBBSqIMCDzCKKwJJLCXhu9YJYPw6lsDAKBggqhkjOPQQDAwNnADBk
AjBl0bJG2A3443ybvrkKjWu8do6nDSR08/M49+19QfA1aDw0nb2sdCOE+xNitpQ9
7ngCMGuQHmnKA2EyOIVpNl2EtRoG+vdmLJQaoukhmCWjkGrQHkai473tGa9cRZ/8
+RZFzw==
-----END CERTIFICATE-----
`,"0.0.14":`-----BEGIN CERTIFICATE-----
MIICoTCCAiegAwIBAgIUJcQrEmPlIh0KWwiC2X6lZ/OdNs8wCgYIKoZIzj0EAwMw
gYUxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExETAPBgNVBAMMCDAw
MDAwMDExMR8wHQYJKoZIhvcNAQkBFhBhZG1pbkBoZWRlcmEuY29tMCAXDTIxMDgy
MzIyNDI1MVoYDzIyOTUwNjA3MjI0MjUxWjCBhTELMAkGA1UEBhMCVVMxCzAJBgNV
BAgMAlRYMRMwEQYDVQQHDApSaWNoYXJkc29uMQ8wDQYDVQQKDAZIZWRlcmExDzAN
BgNVBAsMBkhlZGVyYTERMA8GA1UEAwwIMDAwMDAwMTExHzAdBgkqhkiG9w0BCQEW
EGFkbWluQGhlZGVyYS5jb20wdjAQBgcqhkjOPQIBBgUrgQQAIgNiAASxRizKJSbB
HmG2amvTHLCyExJngCh42agaFkv5Ab9mZYbqZPe0nUn/8RlVAvEiRNggCMYXC6MU
e4J6D1aeLhYaa0UY8Fmxd20NUjAOWhJgUXds4ILMMVG+pevofeC8AsujVDBSMA8G
A1UdEQQIMAaHBH8AAAEwCwYDVR0PBAQDAgSwMBMGA1UdJQQMMAoGCCsGAQUFBwMB
MB0GA1UdDgQWBBS2Ic+LU/6Wssns4Yyf3N6E666xDzAKBggqhkjOPQQDAwNoADBl
AjAH0JMX48GD6vThA6FUsVnJmBID376PRZgxhuZvn9C0HawvNjZVQTkpzpYCwmia
dO4CMQCotakNxyiOxu/BbnPx6ld5+dqVCugsfqClhUhy8ROpNHfKxp3rW7HopowT
WiMlIyI=
-----END CERTIFICATE-----
`,"0.0.15":`-----BEGIN CERTIFICATE-----
MIICoDCCAiegAwIBAgIUSFFNFv1iquxd5txlWA3PlkNju2EwCgYIKoZIzj0EAwMw
gYUxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExETAPBgNVBAMMCDAw
MDAwMDEyMR8wHQYJKoZIhvcNAQkBFhBhZG1pbkBoZWRlcmEuY29tMCAXDTIxMDgy
MzIyNDI1MVoYDzIyOTUwNjA3MjI0MjUxWjCBhTELMAkGA1UEBhMCVVMxCzAJBgNV
BAgMAlRYMRMwEQYDVQQHDApSaWNoYXJkc29uMQ8wDQYDVQQKDAZIZWRlcmExDzAN
BgNVBAsMBkhlZGVyYTERMA8GA1UEAwwIMDAwMDAwMTIxHzAdBgkqhkiG9w0BCQEW
EGFkbWluQGhlZGVyYS5jb20wdjAQBgcqhkjOPQIBBgUrgQQAIgNiAAQus3nAPZkb
ja4Efo7iD4s8NLsFwEwQXQBgBGIJwtA2JRgLyXeWpuu125ib6qJzT8CHvQZhel3b
cwYWi4f2JpabMDepHELLxwZ9fILnAQ8GiHlzhrVq2NI15DI84dXVe4OjVDBSMA8G
A1UdEQQIMAaHBH8AAAEwCwYDVR0PBAQDAgSwMBMGA1UdJQQMMAoGCCsGAQUFBwMB
MB0GA1UdDgQWBBSEO/JFC5/fDcT2gtipDMYMMTd96DAKBggqhkjOPQQDAwNnADBk
AjBalAU47XQL4ziHD8lj21pcp3+R5FKzn96HclMT/vraknCT1Sl+vCf6EYsqmi6Z
+RwCMDpxL6P6OMqyE+HzAeYQ4Fa7MYEQfZGMjka4zxetBLvIpwUCT4EAO8gv9GoU
wCBUzQ==
-----END CERTIFICATE-----
`,"0.0.16":`-----BEGIN CERTIFICATE-----
MIICoDCCAiegAwIBAgIUdnkil4P+VthVMnqygVwGKLt7VfAwCgYIKoZIzj0EAwMw
gYUxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExETAPBgNVBAMMCDAw
MDAwMDEzMR8wHQYJKoZIhvcNAQkBFhBhZG1pbkBoZWRlcmEuY29tMCAXDTIxMDgy
MzIyNDI1MVoYDzIyOTUwNjA3MjI0MjUxWjCBhTELMAkGA1UEBhMCVVMxCzAJBgNV
BAgMAlRYMRMwEQYDVQQHDApSaWNoYXJkc29uMQ8wDQYDVQQKDAZIZWRlcmExDzAN
BgNVBAsMBkhlZGVyYTERMA8GA1UEAwwIMDAwMDAwMTMxHzAdBgkqhkiG9w0BCQEW
EGFkbWluQGhlZGVyYS5jb20wdjAQBgcqhkjOPQIBBgUrgQQAIgNiAARUdz9ig/iA
hEAth2YinHKY6WM63BAxUVItzgk65l1T4wTzwoK4XEwclY5vIeFmZy2e0s95lWgq
SI68VS9gmJ3xp8Q9wOel/bvuF2tvNZmF393TeoNQQVHrQM1yJAx+nPyjVDBSMA8G
A1UdEQQIMAaHBH8AAAEwCwYDVR0PBAQDAgSwMBMGA1UdJQQMMAoGCCsGAQUFBwMB
MB0GA1UdDgQWBBTBFdNwHKSRDo6CxfA1aglY0N8joTAKBggqhkjOPQQDAwNnADBk
AjAqPIel58Rcl2kDxZxJPD9mK9xW4TU+d2NuP3n140TQ6nPlw1OwCPI7a4i3wfEe
08ICMBbrpNRdFZcvy76KoLPfTPvqbtWWaR/0tLZg4Rjj3x7SYgUg3vrVDmodHGkb
4T2Raw==
-----END CERTIFICATE-----
`,"0.0.17":`-----BEGIN CERTIFICATE-----
MIICoDCCAiegAwIBAgIUDg+G4Ep+KEmIo+nCOY8DjFX60swwCgYIKoZIzj0EAwMw
gYUxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExETAPBgNVBAMMCDAw
MDAwMDE0MR8wHQYJKoZIhvcNAQkBFhBhZG1pbkBoZWRlcmEuY29tMCAXDTIxMDgy
MzIyNDI1MloYDzIyOTUwNjA3MjI0MjUyWjCBhTELMAkGA1UEBhMCVVMxCzAJBgNV
BAgMAlRYMRMwEQYDVQQHDApSaWNoYXJkc29uMQ8wDQYDVQQKDAZIZWRlcmExDzAN
BgNVBAsMBkhlZGVyYTERMA8GA1UEAwwIMDAwMDAwMTQxHzAdBgkqhkiG9w0BCQEW
EGFkbWluQGhlZGVyYS5jb20wdjAQBgcqhkjOPQIBBgUrgQQAIgNiAASCQRL5xUUh
1bsTXRPAf/qVFWEOxsJTiMlF3+UJ4MajWE5zmc2QNIzqj7NE24z3fNxgjViNK/8+
oBNQeqXfyJ/4etNMzTyG4JTsvWRAQ3aR1J4WDbfwpcgw6AIOKq9OLP6jVDBSMA8G
A1UdEQQIMAaHBH8AAAEwCwYDVR0PBAQDAgSwMBMGA1UdJQQMMAoGCCsGAQUFBwMB
MB0GA1UdDgQWBBQB9V2fygf48zyyVL3bnAxCLDUV9zAKBggqhkjOPQQDAwNnADBk
AjBonlThjjvi3fg7ODQcatPHBkp8Yon/p1ukm3YzYA3kitqroXU7BkmwRae2fbqD
TTICMHI+fAy+xWGwXAFNcvNTop11IIoszcgJJY+1Mc2Q/USk3pP6iezta+rvnaWu
7JySHg==
-----END CERTIFICATE-----
`,"0.0.18":`-----BEGIN CERTIFICATE-----
MIICojCCAiegAwIBAgIUBvI2Vq6O8yXNzbQlj6uQOdpd1lIwCgYIKoZIzj0EAwMw
gYUxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExETAPBgNVBAMMCDAw
MDAwMDE1MR8wHQYJKoZIhvcNAQkBFhBhZG1pbkBoZWRlcmEuY29tMCAXDTIxMDgy
MzIyNDI1MloYDzIyOTUwNjA3MjI0MjUyWjCBhTELMAkGA1UEBhMCVVMxCzAJBgNV
BAgMAlRYMRMwEQYDVQQHDApSaWNoYXJkc29uMQ8wDQYDVQQKDAZIZWRlcmExDzAN
BgNVBAsMBkhlZGVyYTERMA8GA1UEAwwIMDAwMDAwMTUxHzAdBgkqhkiG9w0BCQEW
EGFkbWluQGhlZGVyYS5jb20wdjAQBgcqhkjOPQIBBgUrgQQAIgNiAAR+jFDSzCdn
mMQpgz/vrmD/xioMioumUmyLAkB+voTNsMAOtiaDVbvJty3b4SJETv5tuZyaF5Gb
QAYuKsP7X8siCCVLZC9i9nCg46NHtuQkEmw1pzUUDmYFDfSV2tWedNqjVDBSMA8G
A1UdEQQIMAaHBH8AAAEwCwYDVR0PBAQDAgSwMBMGA1UdJQQMMAoGCCsGAQUFBwMB
MB0GA1UdDgQWBBSqvCmoaVEp2d9WPctby+ooPMGmvTAKBggqhkjOPQQDAwNpADBm
AjEA9fQ2OFZa7fAQGGYydfVaUF0ObxKj3T+hyl0jiCKLe+hyxJSrXCFS2BM71UiG
ZMVxAjEAmCzESBzTVvl4Uv3TyActGTijTCqTNpN3gJmQbZYjKVtqf8Wxj9WeH0pM
E8BlA/qE
-----END CERTIFICATE-----
`,"0.0.19":`-----BEGIN CERTIFICATE-----
MIICojCCAiegAwIBAgIUZBwp7UPLJkDgngbUIx5xjbAn+7YwCgYIKoZIzj0EAwMw
gYUxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExETAPBgNVBAMMCDAw
MDAwMDE2MR8wHQYJKoZIhvcNAQkBFhBhZG1pbkBoZWRlcmEuY29tMCAXDTIxMDgy
MzIyNDI1M1oYDzIyOTUwNjA3MjI0MjUzWjCBhTELMAkGA1UEBhMCVVMxCzAJBgNV
BAgMAlRYMRMwEQYDVQQHDApSaWNoYXJkc29uMQ8wDQYDVQQKDAZIZWRlcmExDzAN
BgNVBAsMBkhlZGVyYTERMA8GA1UEAwwIMDAwMDAwMTYxHzAdBgkqhkiG9w0BCQEW
EGFkbWluQGhlZGVyYS5jb20wdjAQBgcqhkjOPQIBBgUrgQQAIgNiAASCVYu2uF3T
kCkyRP0FfXVyyTA1z8DFqCKGrcODgGJuVAk59H6u8FIRsNipkb3BXFI0xGccok5X
T+t5bMaGDHYJ4fjU78UtPNmankQ5HoiMRJpy7Vn8mzizUzUqGpnhu6GjVDBSMA8G
A1UdEQQIMAaHBH8AAAEwCwYDVR0PBAQDAgSwMBMGA1UdJQQMMAoGCCsGAQUFBwMB
MB0GA1UdDgQWBBQzE6RGn4YlIbdrl0niKWTtJzfXoTAKBggqhkjOPQQDAwNpADBm
AjEAobnXnwlNGNWoHscbl/ytUBSyjC7V11sLYJqtORSRX3k2+bFGsg4ltmOVjTdd
lXatAjEA/Ja3jufmdruqfLa6qigXuYI00YaI96sOwNhdHlnksYfqF41nDe4BsSW6
eQ6N5M9d
-----END CERTIFICATE-----
`,"0.0.20":`-----BEGIN CERTIFICATE-----
MIICoTCCAiegAwIBAgIUE1ZRB5n+Yby+Mwgb2xAcVfTZ53kwCgYIKoZIzj0EAwMw
gYUxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv
bjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExETAPBgNVBAMMCDAw
MDAwMDE3MR8wHQYJKoZIhvcNAQkBFhBhZG1pbkBoZWRlcmEuY29tMCAXDTIxMDgy
MzIyNDI1M1oYDzIyOTUwNjA3MjI0MjUzWjCBhTELMAkGA1UEBhMCVVMxCzAJBgNV
BAgMAlRYMRMwEQYDVQQHDApSaWNoYXJkc29uMQ8wDQYDVQQKDAZIZWRlcmExDzAN
BgNVBAsMBkhlZGVyYTERMA8GA1UEAwwIMDAwMDAwMTcxHzAdBgkqhkiG9w0BCQEW
EGFkbWluQGhlZGVyYS5jb20wdjAQBgcqhkjOPQIBBgUrgQQAIgNiAAR0OfTmHjxT
kBiU3GMa/bTvlTswCDAuFQGIIpMWHaf6V4ighzmn20jCg0AVFStb2q7YLRr4HUx8
ToMzsd7/yjl74BwJgfZnL75T/JInwyMgOBiCTXEf6qVDvhNzL4QJuVujVDBSMA8G
A1UdEQQIMAaHBH8AAAEwCwYDVR0PBAQDAgSwMBMGA1UdJQQMMAoGCCsGAQUFBwMB
MB0GA1UdDgQWBBQFKRUUmdFcDFQzBN9XqMvLgPd7NzAKBggqhkjOPQQDAwNoADBl
AjEA5MUUXSehY3KVIv/2LMgrqo1kPiV39fwYuLSnsMJ67wK8yN1NAkkycg6q2K6g
rBIvAjB3J3a40TINOZTYG+eQs+MSWyfANJLRuJTEOorXzMWM6+05+JYhPnLA8hke
CRfzmSw=
-----END CERTIFICATE-----
`};class p extends ot{constructor(t={}){if(super(t),t.newNode!=null)this._accountId=t.newNode.accountId,this._nodeAddress=null;else if(t.cloneNode!=null)this._accountId=t.cloneNode.node._accountId,this._nodeAddress=t.cloneNode.node._nodeAddress;else throw new Error(`failed to create node: ${JSON.stringify(t)}`)}getKey(){return this._accountId.toString()}toInsecure(){return new p({cloneNode:{node:this,address:this._address.toInsecure()}})}toSecure(){return new p({cloneNode:{node:this,address:this._address.toSecure()}})}setCert(t){switch(t.toString()){case"previewnet":this._cert=Rt[this._accountId.toString()];break;case"testnet":this._cert=St[this._accountId.toString()];break;case"mainnet":this._cert=xt[this._accountId.toString()];break}return this}get accountId(){return this._accountId}get nodeAddress(){return this._nodeAddress}setNodeAddress(t){return this._nodeAddress=t,this}}class at{constructor(t){this._network=new Map,this._nodes=[],this._healthyNodes=[],this._createNetworkChannel=t,this._ledgerId=null,this._minBackoff=8e3,this._maxBackoff=1e3*60*60,this._maxNodeAttempts=-1,this._nodeMinReadmitPeriod=this._minBackoff,this._nodeMaxReadmitPeriod=this._maxBackoff,this._earliestReadmitTime=Date.now()+this._nodeMinReadmitPeriod}setNetworkName(t){return console.warn("Deprecated: Use `setLedgerId` instead"),this.setLedgerId(t)}get networkName(){return console.warn("Deprecated: Use `ledgerId` instead"),this.ledgerId!=null?this.ledgerId.toString():null}setLedgerId(t){return this._ledgerId=typeof t=="string"?T.fromString(t):t,this}get ledgerId(){return this._ledgerId!=null?this._ledgerId:null}_createNodeFromNetworkEntry(t){throw new Error("not implemented")}_getNodesToRemove(t){throw new Error("not implemented")}_removeDeadNodes(){if(this._maxNodeAttempts>0)for(let t=this._nodes.length-1;t>=0;t--)this._nodes[t]._badGrpcStatusCount<this._maxNodeAttempts||this._closeNode(t)}_readmitNodes(){const t=Date.now();if(this._earliestReadmitTime<=t){let e=Number.MAX_SAFE_INTEGER,n=!0;t:for(let r=0;r<this._nodes.length;r++){for(let s=0;s<this._healthyNodes.length;s++)if(n&&this._nodes[r]._readmitTime>t&&(e=Math.min(this._nodes[r]._readmitTime,e)),this._nodes[r]==this._healthyNodes[s])continue t;n=!1,this._nodes[r]._readmitTime<=t&&this._healthyNodes.push(this._nodes[r])}this._earliestReadmitTime=Math.min(Math.max(e,this._nodeMinReadmitPeriod),this._nodeMaxReadmitPeriod)}}_getNumberOfMostHealthyNodes(t){this._removeDeadNodes(),this._readmitNodes();const e=[];let n=this._healthyNodes;for(let r=0;r<t;r++){const s=Math.floor(Math.random()*n.length),a=n[s];e.push(a),n=n.filter(o=>o.getKey()!==a.getKey())}return e}_closeNode(t){const e=this._nodes[t];e.close(),this._removeNodeFromNetwork(e),this._nodes.splice(t,1)}_removeNodeFromNetwork(t){const e=this._network.get(t.getKey());for(let n=0;n<e.length;n++)if(e[n]===t){e.splice(n,1);break}e.length===0&&this._network.delete(t.getKey())}_setNetwork(t){const e=[],n=new Set,r=new Set,s=[],a=new Map;for(const o of this._getNodesToRemove(t))this._closeNode(o);for(const o of this._nodes)e.push(o),n.add(o.getKey()),r.add(o.address.toString());for(const[o,i]of t)n.has(i.toString())&&r.has(o)||e.push(this._createNodeFromNetworkEntry([o,i]));st(e);for(const o of e){if(!o.isHealthy())continue;s.push(o);const i=a.has(o.getKey())?a.get(o.getKey()):[];i.push(o),a.set(o.getKey(),i)}return this._nodes=e,this._healthyNodes=s,this._network=a,this._ledgerId=null,this}get maxNodeAttempts(){return this._maxNodeAttempts}setMaxNodeAttempts(t){return this._maxNodeAttempts=t,this}get minBackoff(){return this._minBackoff}setMinBackoff(t){this._minBackoff=t;for(const e of this._nodes)e.setMinBackoff(t);return this}get maxBackoff(){return this._maxBackoff}setMaxBackoff(t){this._maxBackoff=t;for(const e of this._nodes)e.setMaxBackoff(t);return this}get nodeMinReadmitPeriod(){return this._nodeMinReadmitPeriod}setNodeMinReadmitPeriod(t){return this._nodeMinReadmitPeriod=t,this._earliestReadmitTime=Date.now()+this._nodeMinReadmitPeriod,this}get nodeMaxReadmitPeriod(){return this._nodeMaxReadmitPeriod}setNodeMaxReadmitPeriod(t){return this._nodeMaxReadmitPeriod=t,this}getNode(t){if(this._readmitNodes(),t!=null&&t!=null){const e=this._network.get(t.toString());if(e){const n=Math.floor(Math.random()*e.length);return e[n]}else{const n=Array.from(this._network.keys()),r=n[Math.floor(Math.random()*n.length)],s=this._network.get(r),a=Math.floor(Math.random()*s.length);return s[a]}}else{if(this._healthyNodes.length==0)throw new Error("failed to find a healthy working node");return this._healthyNodes[Math.floor(Math.random()*this._healthyNodes.length)]}}increaseBackoff(t){t.increaseBackoff();for(let e=0;e<this._healthyNodes.length;e++)this._healthyNodes[e]==t&&this._healthyNodes.splice(e,1)}decreaseBackoff(t){t.decreaseBackoff()}close(){for(const t of this._nodes)t.close();this._network.clear(),this._nodes=[]}}let jt=class extends at{constructor(t){super(t),this._maxNodesPerTransaction=-1,this._addressBook=null,this._transportSecurity=!1}setNetwork(t){this._setNetwork(new Map(Object.entries(t).map(([e,n])=>[e,typeof n=="string"?A.fromString(n):n])))}setNetworkFromAddressBook(t){const e={},n=this.isTransportSecurity()?50212:50211;for(const r of t.nodeAddresses)for(const s of r.addresses)s.port===n&&r.accountId!=null&&(e[s.toString()]=r.accountId);return this.setNetwork(e),this}get network(){var t={};for(const e of this._nodes)t[e.address.toString()]=e.accountId;return t}setNetworkName(t){switch(super.setLedgerId(t),t){case"mainnet":this._addressBook=Nt;break;case"testnet":this._addressBook=Qt;break;case"previewnet":this._addressBook=mt;break}if(this._addressBook!=null)for(const e of this._nodes)for(const n of this._addressBook.nodeAddresses)n.accountId!=null&&n.accountId.toString()===e.accountId.toString()&&e.setNodeAddress(n);return this}get networkName(){return this._ledgerId!=null?this._ledgerId.toString():null}_createNodeFromNetworkEntry(t){const e=typeof t[1]=="string"?A.fromString(t[1]):t[1];return new p({newNode:{address:t[0],accountId:e,channelInitFunction:this._createNetworkChannel}}).setMinBackoff(this._minBackoff)}_getNodesToRemove(t){const e=[];for(let n=this._nodes.length-1;n>=0;n--){const r=this._nodes[n],s=t.get(r.address.toString());(s==null||s.toString()!==r.accountId.toString())&&e.push(n)}return e}_checkNetworkContainsEntry(t){for(const e of this._nodes)if(e.address.toString()===t[0])return!0;return!1}get maxNodesPerTransaction(){return this._maxNodesPerTransaction}setMaxNodesPerTransaction(t){return this._maxNodesPerTransaction=t,this}get maxNodeAttempts(){return this._maxNodeAttempts}setMaxNodeAttempts(t){return this._maxNodeAttempts=t,this}isTransportSecurity(){return this._transportSecurity}setTransportSecurity(t){if(this._transportSecurity==t)return this;this._network.clear();for(let e=0;e<this._nodes.length;e++){let n=this._nodes[e];n.close(),n=t?n.toSecure().setCert(this._ledgerId!=null?this._ledgerId.toString():""):n.toInsecure(),this._nodes[e]=n;const r=this._network.get(n.getKey())!=null?this._network.get(n.getKey()):[];r.push(n),this._network.set(n.getKey(),r)}return this._healthyNodes=[...this._nodes],this._transportSecurity=t,this}getNumberOfNodesForTransaction(){return this._maxNodesPerTransaction>0?this._maxNodesPerTransaction:this._nodes.length<=9?this._nodes.length:Math.floor((this._nodes.length+3-1)/3)}getNodeAccountIdsForExecute(){return this._getNumberOfMostHealthyNodes(this.getNumberOfNodesForTransaction()).map(t=>t.accountId)}};class Zt extends ot{constructor(t={}){super(t)}getKey(){return this._address.toString()}}class pt extends at{constructor(t){super(t)}setNetwork(t){this._setNetwork(new Map(t.map(e=>[e,e])))}get network(){var t=[];for(const e of this._nodes)t.push(e.address.toString());return t}_createNodeFromNetworkEntry(t){return new Zt({newNode:{address:t[1],channelInitFunction:this._createNetworkChannel}}).setMinBackoff(this._minBackoff)}_getNodesToRemove(t){const e=[],n=Object.values(t);for(let r=this._nodes.length-1;r>=0;r--){const s=this._nodes[r];n.includes(s.address.toString())||e.push(r)}return e}getNextMirrorNode(){if(this._createNetworkChannel==null)throw new Error("mirror network not supported on browser");return this._getNumberOfMostHealthyNodes(1)[0]}}class zt{constructor(t){this._mirrorNetwork=new pt(this._createMirrorNetworkChannel()),this._network=new jt(this._createNetworkChannel()),this._operator=null,this._defaultMaxTransactionFee=null,this._defaultMaxQueryPayment=new I(1),t!=null&&t.operator!=null&&this.setOperator(t.operator.accountId,t.operator.privateKey),this._maxAttempts=null,this._signOnDemand=!1,this._autoValidateChecksums=!1,this._minBackoff=250,this._maxBackoff=8e3,this._defaultRegenerateTransactionId=!0,this._requestTimeout=null,this._networkUpdatePeriod=24*60*60*1e3,this._isShutdown=!1,t!=null&&t.scheduleNetworkUpdate!==!1&&(this._initialNetworkUpdate(),this._scheduleNetworkUpdate()),this._timer,this._logger=null}setNetworkName(t){return console.warn("Deprecated: Use `setLedgerId` instead"),this.setLedgerId(t)}get networkName(){return console.warn("Deprecated: Use `ledgerId` instead"),this.ledgerId!=null?this.ledgerId.toString():null}setLedgerId(t){return this._network.setLedgerId(typeof t=="string"?T.fromString(t):t),this}get ledgerId(){return this._network._ledgerId!=null?this._network.ledgerId:null}setNetwork(t){throw new Error("not implemented")}setNetworkFromAddressBook(t){return this._network.setNetworkFromAddressBook(t),this}get network(){return this._network.network}setMirrorNetwork(t){throw new Error("not implemented")}get mirrorNetwork(){return this._mirrorNetwork.network}get signOnDemand(){return this._signOnDemand}setSignOnDemand(t){this._signOnDemand=t}isTransportSecurity(){return this._network.isTransportSecurity()}setTransportSecurity(t){return this._network.setTransportSecurity(t),this}setOperator(t,e){const n=typeof e=="string"?R.fromStringDer(e):e;return this.setOperatorWith(t,n.publicKey,r=>Promise.resolve(n.sign(r)))}getOperator(){return this._operator}setOperatorWith(t,e,n){const r=t instanceof A?t:A.fromString(t);return this._network._ledgerId!=null&&r.validateChecksum(this),this._operator={transactionSigner:n,accountId:r,publicKey:e instanceof S?e:S.fromString(e)},this}setAutoValidateChecksums(t){return this._autoValidateChecksums=t,this}isAutoValidateChecksumsEnabled(){return this._autoValidateChecksums}get operatorAccountId(){return this._operator!=null?this._operator.accountId:null}get operatorPublicKey(){return this._operator!=null?this._operator.publicKey:null}get defaultMaxTransactionFee(){return this._defaultMaxTransactionFee}get maxTransactionFee(){return this.defaultMaxTransactionFee}setDefaultMaxTransactionFee(t){if(t.toTinybars().toInt()<0)throw new Error("defaultMaxTransactionFee must be non-negative");return this._defaultMaxTransactionFee=t,this}setMaxTransactionFee(t){return this.setDefaultMaxTransactionFee(t)}get defaultRegenerateTransactionId(){return this._defaultRegenerateTransactionId}setDefaultRegenerateTransactionId(t){return this._defaultRegenerateTransactionId=t,this}get defaultMaxQueryPayment(){return this._defaultMaxQueryPayment}get maxQueryPayment(){return this.defaultMaxQueryPayment}setDefaultMaxQueryPayment(t){if(t.toTinybars().toInt()<0)throw new Error("defaultMaxQueryPayment must be non-negative");return this._defaultMaxQueryPayment=t,this}setMaxQueryPayment(t){return this.setDefaultMaxQueryPayment(t)}get maxAttempts(){return this._maxAttempts!=null?this._maxAttempts:10}setMaxAttempts(t){return this._maxAttempts=t,this}get maxNodeAttempts(){return this._network.maxNodeAttempts}setMaxNodeAttempts(t){return this._network.setMaxNodeAttempts(t),this}get nodeWaitTime(){return this._network.minBackoff}setNodeWaitTime(t){return this._network.setMinBackoff(t),this}get maxNodesPerTransaction(){return this._network.maxNodesPerTransaction}setMaxNodesPerTransaction(t){return this._network.setMaxNodesPerTransaction(t),this}setMinBackoff(t){if(t==null)throw new Error("minBackoff cannot be null.");if(t>this._maxBackoff)throw new Error("minBackoff cannot be larger than maxBackoff.");return this._minBackoff=t,this}get minBackoff(){return this._minBackoff}setMaxBackoff(t){if(t==null)throw new Error("maxBackoff cannot be null.");if(t<this._minBackoff)throw new Error("maxBackoff cannot be smaller than minBackoff.");return this._maxBackoff=t,this}get maxBackoff(){return this._maxBackoff}setNodeMinBackoff(t){return this._network.setMinBackoff(t),this}get nodeMinBackoff(){return this._network.minBackoff}setNodeMaxBackoff(t){return this._network.setMaxBackoff(t),this}get nodeMaxBackoff(){return this._network.maxBackoff}setNodeMinReadmitPeriod(t){return this._network.setNodeMinReadmitPeriod(t),this}get nodeMinReadmitPeriod(){return this._network.nodeMinReadmitPeriod}setNodeMaxReadmitPeriod(t){return this._network.setNodeMaxReadmitPeriod(t),this}get nodeMaxReadmitPeriod(){return this._network.nodeMaxReadmitPeriod}setRequestTimeout(t){return this._requestTimeout=t,this}get requestTimeout(){return this._requestTimeout}get networkUpdatePeriod(){return this._networkUpdatePeriod}setNetworkUpdatePeriod(t){return clearTimeout(this._timer),this._networkUpdatePeriod=t,this._scheduleNetworkUpdate(),this}setLogger(t){return this._logger=t,this}get logger(){return this._logger}async ping(t){await new rt({accountId:t}).setNodeAccountIds([t instanceof A?t:A.fromString(t)]).execute(this)}async pingAll(){for(const t of Object.values(this._network.network))await this.ping(t)}close(){this._network.close(),this._mirrorNetwork.close(),this._isShutdown=!0,clearTimeout(this._timer)}_createNetworkChannel(){throw new Error("not implemented")}_createMirrorNetworkChannel(){throw new Error("not implemented")}_scheduleNetworkUpdate(){this._timer=setTimeout(async()=>{try{const t=await q.addressBookQueryConstructor().setFileId(X.ADDRESS_BOOK).execute(this);this.setNetworkFromAddressBook(t),this._isShutdown||this._scheduleNetworkUpdate()}catch(t){this._logger&&this._logger.trace(`failed to update client address book: ${t.toString()}`)}},this._networkUpdatePeriod)}_initialNetworkUpdate(){setTimeout(async()=>{try{const t=await q.addressBookQueryConstructor().setFileId(X.ADDRESS_BOOK).execute(this);this.setNetworkFromAddressBook(t)}catch(t){this._logger&&this._logger.trace(`failed to update client address book: ${t.toString()}`)}},1e3)}get isClientShutDown(){return this._isShutdown}}const{proto:B}=nt;class Ft{constructor(){this._crypto=null,this._smartContract=null,this._file=null,this._consensus=null,this._freeze=null,this._network=null,this._token=null,this._schedule=null,this._util=null}close(){throw new Error("not implemented")}get crypto(){return this._crypto!=null?this._crypto:(this._crypto=B.CryptoService.create(this._createUnaryClient("CryptoService")),this._crypto)}get smartContract(){return this._smartContract!=null?this._smartContract:(this._smartContract=B.SmartContractService.create(this._createUnaryClient("SmartContractService")),this._smartContract)}get file(){return this._file!=null?this._file:(this._file=B.FileService.create(this._createUnaryClient("FileService")),this._file)}get consensus(){return this._consensus!=null?this._consensus:(this._consensus=B.ConsensusService.create(this._createUnaryClient("ConsensusService")),this._consensus)}get freeze(){return this._freeze!=null?this._freeze:(this._freeze=B.FreezeService.create(this._createUnaryClient("FreezeService")),this._freeze)}get network(){return this._network!=null?this._network:(this._network=B.NetworkService.create(this._createUnaryClient("NetworkService")),this._network)}get token(){return this._token!=null?this._token:(this._token=B.TokenService.create(this._createUnaryClient("TokenService")),this._token)}get schedule(){return this._schedule!=null?this._schedule:(this._schedule=B.ScheduleService.create(this._createUnaryClient("ScheduleService")),this._schedule)}get util(){return this._util!=null?this._util:(this._util=B.UtilService.create(this._createUnaryClient("UtilService")),this._util)}_createUnaryClient(t){throw new Error("not implemented")}}function Ht(c){const t=new ArrayBuffer(c.byteLength+5);return new DataView(t,1,4).setUint32(0,c.length),new Uint8Array(t,5).set(c),t}function Pt(c,t=0,e=c.byteLength){const n=new DataView(c,t,e);let r=0,s=null,a=0;for(;r<n.byteLength;){const i=n.getUint8(r+0)>>7,w=n.getUint32(r+1),u=r+5;if(u+w>n.byteLength)throw new Error("(BUG) unexpected frame length past the boundary");const g=new Uint8Array(c,n.byteOffset+u,w);if(i===0){if(s!=null)throw new Error("(BUG) unexpectedly received more than one data frame");s=g}else if(i===1){const h=Ct(g),[M,it]=h.split(":");if(M==="grpc-status")a=parseInt(it);else throw new Error(`(BUG) unhandled trailer, ${h}`)}else throw new Error(`(BUG) unexpected frame type: ${i}`);r+=w+5}if(a!==0)throw new Error(`(BUG) unhandled grpc-status: ${a}`);if(s==null)throw new Error("(BUG) unexpectedly received no response");return s}class Wt extends Ft{constructor(t){super(),this._address=t}close(){}_createUnaryClient(t){return async(e,n,r)=>{try{const s=await fetch(`${this._address}/proto.${t}/${e.name}`,{method:"POST",headers:{"content-type":"application/grpc-web+proto","x-user-agent":"hedera-sdk-js/v2","x-grpc-web":"1"},body:Ht(n)});if(!s.ok){const u=new kt(K._fromValue(s.status));r(u,null)}const a=s.headers.get("grpc-status"),o=s.headers.get("grpc-message");if(a!=null&&o!=null){const u=new $(tt._fromValue(parseInt(a)));u.message=o,r(u,null)}const i=await s.arrayBuffer(),w=Pt(i);r(null,w)}catch{const a=new $(tt._fromValue(18));r(a,null)}}}}const D={fromName(c){switch(c){case"mainnet":return D.MAINNET;case"testnet":return D.TESTNET;case"previewnet":return D.PREVIEWNET;default:throw new Error(`unknown network name: ${c}`)}},MAINNET:Tt,TESTNET:_t,PREVIEWNET:yt};class N extends zt{constructor(t){if(super(t),t!=null)if(typeof t.network=="string")switch(t.network){case"mainnet":this.setNetwork(D.MAINNET),this.setLedgerId(T.MAINNET);break;case"testnet":this.setNetwork(D.TESTNET),this.setLedgerId(T.TESTNET);break;case"previewnet":this.setNetwork(D.PREVIEWNET),this.setLedgerId(T.PREVIEWNET);break;default:throw new Error(`unknown network: ${t.network}`)}else t.network!=null&&this.setNetwork(t.network)}static fromConfig(t){return new N(typeof t=="string"?JSON.parse(t):t)}static forNetwork(t){return new N({network:t,scheduleNetworkUpdate:!1})}static forName(t){return new N({network:t,scheduleNetworkUpdate:!1})}static forMainnet(){return new N({network:"mainnet",scheduleNetworkUpdate:!1})}static forTestnet(){return new N({network:"testnet",scheduleNetworkUpdate:!1})}static forPreviewnet(){return new N({network:"previewnet",scheduleNetworkUpdate:!1})}setNetwork(t){if(typeof t=="string")switch(t){case"previewnet":this._network.setNetwork(D.PREVIEWNET);break;case"testnet":this._network.setNetwork(D.TESTNET);break;case"mainnet":this._network.setNetwork(D.MAINNET)}else this._network.setNetwork(t)}setMirrorNetwork(t){return typeof t=="string"?this._mirrorNetwork.setNetwork([]):this._mirrorNetwork.setNetwork(t),this}_createNetworkChannel(){return t=>new Wt(t)}_createMirrorNetworkChannel(){return()=>{throw new Error("mirror support is not supported in browsers")}}}export{Jt as AccountAllowanceAdjustTransaction,oe as AccountAllowanceApproveTransaction,ae as AccountAllowanceDeleteTransaction,ie as AccountBalance,rt as AccountBalanceQuery,ce as AccountCreateTransaction,Ae as AccountDeleteTransaction,A as AccountId,he as AccountInfo,vt as AccountInfoFlow,k as AccountInfoQuery,Dt as AccountRecordsQuery,le as AccountStakersQuery,ue as AccountUpdateTransaction,we as AddressBookQuery,de as AssessedCustomFee,ge as BadKeyError,Ee as BadMnemonicError,Me as BadMnemonicReason,q as Cache,N as Client,Be as ContractByteCodeQuery,Ie as ContractCallQuery,Ot as ContractCreateFlow,lt as ContractCreateTransaction,De as ContractDeleteTransaction,fe as ContractExecuteTransaction,me as ContractFunctionParameters,Qe as ContractFunctionResult,Ne as ContractFunctionSelector,m as ContractId,Ce as ContractInfo,ke as ContractInfoQuery,Te as ContractLogInfo,_e as ContractNonceInfo,ye as ContractUpdateTransaction,Ge as CustomFee,Ve as CustomFixedFee,be as CustomFractionalFee,Ue as CustomRoyaltyFee,Ye as DelegateContractId,Re as EntityIdHelper,Lt as EthereumFlow,dt as EthereumTransaction,wt as EthereumTransactionData,Se as EthereumTransactionDataEip1559,xe as EthereumTransactionDataEip2930,je as EthereumTransactionDataLegacy,Ze as EvmAddress,L as ExchangeRate,H as ExchangeRates,pe as Executable,ze as FeeAssessmentMethod,C as FeeComponents,y as FeeData,gt as FeeDataType,G as FeeSchedule,P as FeeSchedules,F as FileAppendTransaction,Fe as FileContentsQuery,z as FileCreateTransaction,O as FileDeleteTransaction,X as FileId,He as FileInfo,Pe as FileInfoQuery,We as FileUpdateTransaction,Ke as FreezeTransaction,Je as HEDERA_PATH,I as Hbar,At as HbarAllowance,ve as HbarUnit,Oe as Key,U as KeyList,T as LedgerId,Le as LiveHash,qe as LiveHashAddTransaction,Xe as LiveHashDeleteTransaction,$e as LiveHashQuery,Y as LogLevel,te as Logger,tn as MaxQueryPaymentExceeded,en as Mnemonic,ee as NetworkName,nn as NetworkVersionInfo,rn as NetworkVersionInfoQuery,b as NftId,sn as PrecheckStatusError,R as PrivateKey,on as PrngTransaction,qt as Provider,an as ProxyStaker,S as PublicKey,Mt as Query,cn as ReceiptStatusError,Et as RequestType,An as SLIP44_ECDSA_ETH_PATH,hn as SLIP44_ECDSA_HEDERA_PATH,ln as ScheduleCreateTransaction,un as ScheduleDeleteTransaction,wn as ScheduleId,dn as ScheduleInfo,gn as ScheduleInfoQuery,En as ScheduleSignTransaction,Mn as SemanticVersion,Xt as Signer,bt as SignerSignature,Bn as Status,In as StatusError,Ut as SubscriptionHandle,Dn as SystemDeleteTransaction,fn as SystemUndeleteTransaction,E as Timestamp,ht as TokenAllowance,mn as TokenAssociateTransaction,Qn as TokenBurnTransaction,Nn as TokenCreateTransaction,Cn as TokenDeleteTransaction,kn as TokenDissociateTransaction,Tn as TokenFeeScheduleUpdateTransaction,_n as TokenFreezeTransaction,yn as TokenGrantKycTransaction,J as TokenId,Gn as TokenInfo,Vn as TokenInfoQuery,bn as TokenMintTransaction,v as TokenNftAllowance,Un as TokenNftInfo,Yn as TokenNftInfoQuery,Rn as TokenPauseTransaction,Sn as TokenRevokeKycTransaction,xn as TokenSupplyType,jn as TokenType,Zn as TokenUnfreezeTransaction,pn as TokenUnpauseTransaction,zn as TokenUpdateTransaction,Fn as TokenWipeTransaction,Hn as TopicCreateTransaction,Pn as TopicDeleteTransaction,It as TopicId,Wn as TopicInfo,Kn as TopicInfoQuery,V as TopicMessage,Z as TopicMessageChunk,$t as TopicMessageQuery,Jn as TopicMessageSubmitTransaction,vn as TopicUpdateTransaction,ct as Transaction,j as TransactionFeeSchedule,x as TransactionId,On as TransactionReceipt,Ln as TransactionReceiptQuery,qn as TransactionRecord,Xn as TransactionRecordQuery,$n as TransactionResponse,tr as Transfer,er as TransferTransaction,W as Wallet};
