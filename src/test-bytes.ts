import { Transaction, TransferTransaction, ContractExecuteTransaction, ContractCallQuery } from '@hashgraph/sdk';

import protos, { proto } from '@hashgraph/proto';

const bytesValues = Object.values({
  "0": 10,
  "1": 215,
  "2": 1,
  "3": 42,
  "4": 212,
  "5": 1,
  "6": 10,
  "7": 106,
  "8": 10,
  "9": 24,
  "10": 10,
  "11": 11,
  "12": 8,
  "13": 176,
  "14": 208,
  "15": 224,
  "16": 145,
  "17": 6,
  "18": 16,
  "19": 168,
  "20": 141,
  "21": 202,
  "22": 52,
  "23": 18,
  "24": 7,
  "25": 8,
  "26": 0,
  "27": 16,
  "28": 0,
  "29": 24,
  "30": 173,
  "31": 48,
  "32": 24,
  "33": 0,
  "34": 18,
  "35": 6,
  "36": 8,
  "37": 0,
  "38": 16,
  "39": 0,
  "40": 24,
  "41": 3,
  "42": 24,
  "43": 128,
  "44": 132,
  "45": 175,
  "46": 95,
  "47": 34,
  "48": 2,
  "49": 8,
  "50": 120,
  "51": 50,
  "52": 0,
  "53": 58,
  "54": 59,
  "55": 10,
  "56": 9,
  "57": 8,
  "58": 0,
  "59": 16,
  "60": 0,
  "61": 24,
  "62": 177,
  "63": 173,
  "64": 154,
  "65": 16,
  "66": 16,
  "67": 128,
  "68": 137,
  "69": 122,
  "70": 24,
  "71": 128,
  "72": 202,
  "73": 181,
  "74": 238,
  "75": 1,
  "76": 34,
  "77": 36,
  "78": 38,
  "79": 71,
  "80": 98,
  "81": 4,
  "82": 0,
  "83": 0,
  "84": 0,
  "85": 0,
  "86": 0,
  "87": 0,
  "88": 0,
  "89": 0,
  "90": 0,
  "91": 0,
  "92": 0,
  "93": 0,
  "94": 0,
  "95": 0,
  "96": 0,
  "97": 0,
  "98": 0,
  "99": 0,
  "100": 0,
  "101": 0,
  "102": 0,
  "103": 0,
  "104": 0,
  "105": 0,
  "106": 0,
  "107": 0,
  "108": 0,
  "109": 0,
  "110": 0,
  "111": 0,
  "112": 24,
  "113": 45,
  "114": 18,
  "115": 102,
  "116": 10,
  "117": 100,
  "118": 10,
  "119": 32,
  "120": 160,
  "121": 15,
  "122": 159,
  "123": 23,
  "124": 1,
  "125": 124,
  "126": 184,
  "127": 34,
  "128": 48,
  "129": 33,
  "130": 143,
  "131": 58,
  "132": 134,
  "133": 156,
  "134": 250,
  "135": 140,
  "136": 30,
  "137": 170,
  "138": 104,
  "139": 202,
  "140": 234,
  "141": 147,
  "142": 55,
  "143": 137,
  "144": 185,
  "145": 38,
  "146": 32,
  "147": 149,
  "148": 176,
  "149": 68,
  "150": 79,
  "151": 30,
  "152": 26,
  "153": 64,
  "154": 38,
  "155": 224,
  "156": 42,
  "157": 186,
  "158": 25,
  "159": 216,
  "160": 224,
  "161": 208,
  "162": 192,
  "163": 157,
  "164": 202,
  "165": 218,
  "166": 206,
  "167": 241,
  "168": 228,
  "169": 247,
  "170": 113,
  "171": 221,
  "172": 41,
  "173": 157,
  "174": 98,
  "175": 17,
  "176": 142,
  "177": 255,
  "178": 14,
  "179": 101,
  "180": 20,
  "181": 8,
  "182": 34,
  "183": 148,
  "184": 81,
  "185": 13,
  "186": 28,
  "187": 113,
  "188": 161,
  "189": 185,
  "190": 3,
  "191": 131,
  "192": 167,
  "193": 108,
  "194": 4,
  "195": 249,
  "196": 201,
  "197": 202,
  "198": 130,
  "199": 169,
  "200": 94,
  "201": 133,
  "202": 79,
  "203": 48,
  "204": 180,
  "205": 166,
  "206": 32,
  "207": 162,
  "208": 222,
  "209": 155,
  "210": 24,
  "211": 99,
  "212": 73,
  "213": 148,
  "214": 96,
  "215": 125,
  "216": 113,
  "217": 4
});


export function buildTransaction() {

  try {

    const bytes = Uint8Array.from(bytesValues);
    const tx = Transaction.fromBytes(bytes);

    if (tx != null) {
      console.log(`trans id: ${tx.transactionId}`);

      const contract = tx as ContractExecuteTransaction;
      printVars(contract);
      printVars(contract.nodeAccountIds);


    } else {
      console.log(`wrong transaction decode`);
    }

  } catch (err) {
    console.error(`${err}`);
  }

}

export function buildProto() {

  try {

    const bytes = Uint8Array.from(bytesValues);

    const list = proto.TransactionList.decode(bytes);
    console.log(`list:  ${list.transactionList.length}`);

    for (const tx of list.transactionList) {

      const signed = proto.SignedTransaction.decode(tx.signedTransactionBytes!);
      //printVars(signed);

      const body = proto.TransactionBody.decode(signed.bodyBytes);
      //printVars(body);
      if (body.data) {
        console.log(`BODY DATA: ${body.data}`);
      } else {
        console.log(`NO BODY DATA`);
      }

    }

    const body = proto.TransactionBody.decode(bytes);
    //const tx = proto.ContractCallTransactionBody.decode(bytes);

    printVars(body);

  } catch (err) {
    console.error(`${err}`);
  }

}


function printVars(obj?: Object | null) {
  if (obj != null && obj != undefined) {

    //console.log(`CALL: ${tx?.contractID}`);
    let p: keyof typeof obj;
    for (p in obj) {

      if (obj[p] != null) {
        console.log(`var: ${p} -> ${obj[p]}`)
      }
    }


  } else {
    console.log(`Object is null`);
  }
}
