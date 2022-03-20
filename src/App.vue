<script setup lang="ts">

  declare global {
    interface Window {
      wallet?:any;
    }
  }

  import {Client} from '@hashgraph/sdk';
  import { BladeAccount } from './model/blade';

  const walletLoaded = ref<boolean>(false);
  const accountRef = ref<BladeAccount>();
  const errorRef = ref<string>();

  const onWalletLoaded = async (wallet:any)=>{
    console.log(`wallet found: ${wallet}`);

    console.dir(wallet);

    console.log(`typeof login? ${typeof wallet.login}`);

    try {
      const account =  await wallet.login('Testnet');
      console.dir(account, `wallet logged in`);
      accountRef.value = account;
      walletLoaded.value=true;
    } catch (err){
      console.log(`error connecting to extension...`);
      errorRef.value = `${err}`;
    }
  }


  if (window.wallet != null ) {
    console.log(`wallet preloaded.`);
    onWalletLoaded(window.wallet!);
  }

  document.addEventListener('hederaWalletLoaded', async()=>{

 // Grab the injected wallet from the window object
    let wallet = window.wallet!;

    console.log('extension wallet loaded callback...');
  
    onWalletLoaded(wallet);
    // Testnet or Mainnet
    //const account = await wallet.login("Testnet");

    // Instantiate a client
    //const client = Client.forTestnet();

    // Set the operator for signing to the signer from the wallet
    /*client.setOperatorWith(
        account.id,
        account.publicKey,
        wallet.getTransactionSigner()
    );*/

    // You can now use any Hashgraph SDK transaction builders,
    // and execute using this client.
    /*const executed = await new TransferTransaction()
        .addHbarTransfer(wallet.account.id, Hbar.fromTinybars(-1))
        .addHbarTransfer("some.other.id", Hbar.fromTinybars(1))
        .signWithOperator(client)
        .execute(client);

    console.log(await executed.getReceipt(client));*/

  });



</script>

<template>

    <div class="flex flex-row w-full h-full
    justify-items-stretch text-nirvanaNevermind text-sm font-bold">


      <div v-if="walletLoaded">
        <div>Wallet Loaded</div>
        <wallet-account :account="accountRef"/>
      </div>
      <div v-else>WALLET NOT LOADED</div>
      <div v-if="errorRef">{{errorRef}}</div>

    </div>

</template>
