import {Signer} from "@hashgraph/sdk";
import {SignerSignature} from "@hashgraph/sdk/lib/Signer";

export interface ExtendedSigner extends Signer {
  sign(messages: Uint8Array[], signOptions?: {canonical?: boolean, likeHethers?: boolean}) : Promise<SignerSignature[]>
}
