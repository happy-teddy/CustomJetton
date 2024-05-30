/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import {
  Cell,
  Slice,
  Address,
  Builder,
  beginCell,
  TupleReader,
  contractAddress,
  ContractProvider,
  Sender,
  Contract,
  ContractABI,
  ABIType,
  ABIGetter,
  ABIReceiver,
  TupleBuilder,
} from "@ton/core";

export type StateInit = {
  $$type: "StateInit";
  code: Cell;
  data: Cell;
};

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

export type Context = {
  $$type: "Context";
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Cell;
};

export function storeContext(src: Context) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw);
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef();
  return {
    $$type: "Context" as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

export type SendParameters = {
  $$type: "SendParameters";
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
};

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadSendParameters(slice: Slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

export type ChangeOwner = {
  $$type: "ChangeOwner";
  queryId: bigint;
  newOwner: Address;
};

export function storeChangeOwner(src: ChangeOwner) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2174598809, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwner(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2174598809) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return {
    $$type: "ChangeOwner" as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

export type ChangeOwnerOk = {
  $$type: "ChangeOwnerOk";
  queryId: bigint;
  newOwner: Address;
};

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(846932810, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwnerOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 846932810) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return {
    $$type: "ChangeOwnerOk" as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

export type JettonData = {
  $$type: "JettonData";
  total_supply: bigint;
  mintable: boolean;
  owner: Address;
  content: Cell;
  wallet_code: Cell;
};

export function storeJettonData(src: JettonData) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeInt(src.total_supply, 257);
    b_0.storeBit(src.mintable);
    b_0.storeAddress(src.owner);
    b_0.storeRef(src.content);
    b_0.storeRef(src.wallet_code);
  };
}

export function loadJettonData(slice: Slice) {
  let sc_0 = slice;
  let _total_supply = sc_0.loadIntBig(257);
  let _mintable = sc_0.loadBit();
  let _owner = sc_0.loadAddress();
  let _content = sc_0.loadRef();
  let _wallet_code = sc_0.loadRef();
  return {
    $$type: "JettonData" as const,
    total_supply: _total_supply,
    mintable: _mintable,
    owner: _owner,
    content: _content,
    wallet_code: _wallet_code,
  };
}

function loadTupleJettonData(source: TupleReader) {
  let _total_supply = source.readBigNumber();
  let _mintable = source.readBoolean();
  let _owner = source.readAddress();
  let _content = source.readCell();
  let _wallet_code = source.readCell();
  return {
    $$type: "JettonData" as const,
    total_supply: _total_supply,
    mintable: _mintable,
    owner: _owner,
    content: _content,
    wallet_code: _wallet_code,
  };
}

export type JettonWalletData = {
  $$type: "JettonWalletData";
  balance: bigint;
  owner: Address;
  master: Address;
  code: Cell;
};

export function storeJettonWalletData(src: JettonWalletData) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeInt(src.balance, 257);
    b_0.storeAddress(src.owner);
    b_0.storeAddress(src.master);
    b_0.storeRef(src.code);
  };
}

export function loadJettonWalletData(slice: Slice) {
  let sc_0 = slice;
  let _balance = sc_0.loadIntBig(257);
  let _owner = sc_0.loadAddress();
  let _master = sc_0.loadAddress();
  let _code = sc_0.loadRef();
  return {
    $$type: "JettonWalletData" as const,
    balance: _balance,
    owner: _owner,
    master: _master,
    code: _code,
  };
}

export type TokenTransfer = {
  $$type: "TokenTransfer";
  query_id: bigint;
  amount: bigint;
  sender: Address;
  response_destination: Address | null;
  custom_payload: Cell | null;
  forward_ton_amount: bigint;
  forward_payload: Cell;
};

export function storeTokenTransfer(src: TokenTransfer) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(260734629, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.sender);
    b_0.storeAddress(src.response_destination);
    if (src.custom_payload !== null && src.custom_payload !== undefined) {
      b_0.storeBit(true).storeRef(src.custom_payload);
    } else {
      b_0.storeBit(false);
    }
    b_0.storeCoins(src.forward_ton_amount);
    b_0.storeBuilder(src.forward_payload.asBuilder());
  };
}

export function loadTokenTransfer(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 260734629) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _amount = sc_0.loadCoins();
  let _sender = sc_0.loadAddress();
  let _response_destination = sc_0.loadMaybeAddress();
  let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _forward_ton_amount = sc_0.loadCoins();
  let _forward_payload = sc_0.asCell();
  return {
    $$type: "TokenTransfer" as const,
    query_id: _query_id,
    amount: _amount,
    sender: _sender,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

export type TokenTransferInternal = {
  $$type: "TokenTransferInternal";
  query_id: bigint;
  amount: bigint;
  from: Address;
  response_destination: Address | null;
  forward_ton_amount: bigint;
  forward_payload: Cell;
};

export function storeTokenTransferInternal(src: TokenTransferInternal) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(395134233, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.from);
    b_0.storeAddress(src.response_destination);
    b_0.storeCoins(src.forward_ton_amount);
    b_0.storeBuilder(src.forward_payload.asBuilder());
  };
}

export function loadTokenTransferInternal(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 395134233) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _amount = sc_0.loadCoins();
  let _from = sc_0.loadAddress();
  let _response_destination = sc_0.loadMaybeAddress();
  let _forward_ton_amount = sc_0.loadCoins();
  let _forward_payload = sc_0.asCell();
  return {
    $$type: "TokenTransferInternal" as const,
    query_id: _query_id,
    amount: _amount,
    from: _from,
    response_destination: _response_destination,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

export type TokenNotification = {
  $$type: "TokenNotification";
  query_id: bigint;
  amount: bigint;
  from: Address;
  forward_payload: Cell;
};

export function storeTokenNotification(src: TokenNotification) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1935855772, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.from);
    b_0.storeBuilder(src.forward_payload.asBuilder());
  };
}

export function loadTokenNotification(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1935855772) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _amount = sc_0.loadCoins();
  let _from = sc_0.loadAddress();
  let _forward_payload = sc_0.asCell();
  return {
    $$type: "TokenNotification" as const,
    query_id: _query_id,
    amount: _amount,
    from: _from,
    forward_payload: _forward_payload,
  };
}

export type TokenBurn = {
  $$type: "TokenBurn";
  query_id: bigint;
  amount: bigint;
  response_destination: Address | null;
  custom_payload: Cell | null;
};

export function storeTokenBurn(src: TokenBurn) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1499400124, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.response_destination);
    if (src.custom_payload !== null && src.custom_payload !== undefined) {
      b_0.storeBit(true).storeRef(src.custom_payload);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadTokenBurn(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1499400124) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _amount = sc_0.loadCoins();
  let _response_destination = sc_0.loadMaybeAddress();
  let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: "TokenBurn" as const,
    query_id: _query_id,
    amount: _amount,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
  };
}

export type TokenBurnNotification = {
  $$type: "TokenBurnNotification";
  query_id: bigint;
  amount: bigint;
  sender: Address;
  response_destination: Address | null;
};

export function storeTokenBurnNotification(src: TokenBurnNotification) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2078119902, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.sender);
    b_0.storeAddress(src.response_destination);
  };
}

export function loadTokenBurnNotification(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2078119902) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _amount = sc_0.loadCoins();
  let _sender = sc_0.loadAddress();
  let _response_destination = sc_0.loadMaybeAddress();
  return {
    $$type: "TokenBurnNotification" as const,
    query_id: _query_id,
    amount: _amount,
    sender: _sender,
    response_destination: _response_destination,
  };
}

export type TokenExcesses = {
  $$type: "TokenExcesses";
  query_id: bigint;
};

export function storeTokenExcesses(src: TokenExcesses) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3576854235, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadTokenExcesses(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3576854235) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  return { $$type: "TokenExcesses" as const, query_id: _query_id };
}

export type TokenUpdateContent = {
  $$type: "TokenUpdateContent";
  content: Cell;
};

export function storeTokenUpdateContent(src: TokenUpdateContent) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2937889386, 32);
    b_0.storeRef(src.content);
  };
}

export function loadTokenUpdateContent(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2937889386) {
    throw Error("Invalid prefix");
  }
  let _content = sc_0.loadRef();
  return { $$type: "TokenUpdateContent" as const, content: _content };
}

export type ProvideWalletAddress = {
  $$type: "ProvideWalletAddress";
  query_id: bigint;
  owner_address: Address;
  include_address: boolean;
};

export function storeProvideWalletAddress(src: ProvideWalletAddress) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(745978227, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeAddress(src.owner_address);
    b_0.storeBit(src.include_address);
  };
}

export function loadProvideWalletAddress(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 745978227) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _owner_address = sc_0.loadAddress();
  let _include_address = sc_0.loadBit();
  return {
    $$type: "ProvideWalletAddress" as const,
    query_id: _query_id,
    owner_address: _owner_address,
    include_address: _include_address,
  };
}

export type TakeWalletAddress = {
  $$type: "TakeWalletAddress";
  query_id: bigint;
  wallet_address: Address;
  owner_address: Cell;
};

export function storeTakeWalletAddress(src: TakeWalletAddress) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3513996288, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeAddress(src.wallet_address);
    b_0.storeBuilder(src.owner_address.asBuilder());
  };
}

export function loadTakeWalletAddress(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3513996288) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _wallet_address = sc_0.loadAddress();
  let _owner_address = sc_0.asCell();
  return {
    $$type: "TakeWalletAddress" as const,
    query_id: _query_id,
    wallet_address: _wallet_address,
    owner_address: _owner_address,
  };
}

export type Mint = {
  $$type: "Mint";
  amount: bigint;
  receiver: Address;
};

export function storeMint(src: Mint) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(4235234258, 32);
    b_0.storeInt(src.amount, 257);
    b_0.storeAddress(src.receiver);
  };
}

export function loadMint(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 4235234258) {
    throw Error("Invalid prefix");
  }
  let _amount = sc_0.loadIntBig(257);
  let _receiver = sc_0.loadAddress();
  return { $$type: "Mint" as const, amount: _amount, receiver: _receiver };
}

type SampleJetton_init_args = {
  $$type: "SampleJetton_init_args";
  owner: Address;
  content: Cell;
  max_supply: bigint;
};

function initSampleJetton_init_args(src: SampleJetton_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeAddress(src.owner);
    b_0.storeRef(src.content);
    b_0.storeInt(src.max_supply, 257);
  };
}

async function SampleJetton_init(
  owner: Address,
  content: Cell,
  max_supply: bigint
) {
  const __code = Cell.fromBase64(
    "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"
  );
  const __system = Cell.fromBase64(
    "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"
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initSampleJetton_init_args({
    $$type: "SampleJetton_init_args",
    owner,
    content,
    max_supply,
  })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const SampleJetton_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack undeflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
  3688: { message: `Not mintable` },
  4429: { message: `Invalid sender` },
  12241: { message: `Max supply exceeded` },
  14534: { message: `Not owner` },
  16059: { message: `Invalid value` },
  18668: { message: `Can't Mint Anymore` },
  23951: { message: `Insufficient gas` },
  42708: { message: `Invalid sender!` },
  43422: { message: `Invalid value - Burn` },
  62972: { message: `Invalid balance` },
};

const SampleJetton_types: ABIType[] = [
  {
    name: "StateInit",
    header: null,
    fields: [
      { name: "code", type: { kind: "simple", type: "cell", optional: false } },
      { name: "data", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "Context",
    header: null,
    fields: [
      {
        name: "bounced",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "sender",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "value",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      { name: "raw", type: { kind: "simple", type: "slice", optional: false } },
    ],
  },
  {
    name: "SendParameters",
    header: null,
    fields: [
      {
        name: "bounce",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "to",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "value",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "mode",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      { name: "body", type: { kind: "simple", type: "cell", optional: true } },
      { name: "code", type: { kind: "simple", type: "cell", optional: true } },
      { name: "data", type: { kind: "simple", type: "cell", optional: true } },
    ],
  },
  {
    name: "ChangeOwner",
    header: 2174598809,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "newOwner",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "ChangeOwnerOk",
    header: 846932810,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "newOwner",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "JettonData",
    header: null,
    fields: [
      {
        name: "total_supply",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "mintable",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "owner",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "content",
        type: { kind: "simple", type: "cell", optional: false },
      },
      {
        name: "wallet_code",
        type: { kind: "simple", type: "cell", optional: false },
      },
    ],
  },
  {
    name: "JettonWalletData",
    header: null,
    fields: [
      {
        name: "balance",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "owner",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "master",
        type: { kind: "simple", type: "address", optional: false },
      },
      { name: "code", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "TokenTransfer",
    header: 260734629,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "sender",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "response_destination",
        type: { kind: "simple", type: "address", optional: true },
      },
      {
        name: "custom_payload",
        type: { kind: "simple", type: "cell", optional: true },
      },
      {
        name: "forward_ton_amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "forward_payload",
        type: {
          kind: "simple",
          type: "slice",
          optional: false,
          format: "remainder",
        },
      },
    ],
  },
  {
    name: "TokenTransferInternal",
    header: 395134233,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "from",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "response_destination",
        type: { kind: "simple", type: "address", optional: true },
      },
      {
        name: "forward_ton_amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "forward_payload",
        type: {
          kind: "simple",
          type: "slice",
          optional: false,
          format: "remainder",
        },
      },
    ],
  },
  {
    name: "TokenNotification",
    header: 1935855772,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "from",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "forward_payload",
        type: {
          kind: "simple",
          type: "slice",
          optional: false,
          format: "remainder",
        },
      },
    ],
  },
  {
    name: "TokenBurn",
    header: 1499400124,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "response_destination",
        type: { kind: "simple", type: "address", optional: true },
      },
      {
        name: "custom_payload",
        type: { kind: "simple", type: "cell", optional: true },
      },
    ],
  },
  {
    name: "TokenBurnNotification",
    header: 2078119902,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "sender",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "response_destination",
        type: { kind: "simple", type: "address", optional: true },
      },
    ],
  },
  {
    name: "TokenExcesses",
    header: 3576854235,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "TokenUpdateContent",
    header: 2937889386,
    fields: [
      {
        name: "content",
        type: { kind: "simple", type: "cell", optional: false },
      },
    ],
  },
  {
    name: "ProvideWalletAddress",
    header: 745978227,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "owner_address",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "include_address",
        type: { kind: "simple", type: "bool", optional: false },
      },
    ],
  },
  {
    name: "TakeWalletAddress",
    header: 3513996288,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "wallet_address",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "owner_address",
        type: {
          kind: "simple",
          type: "slice",
          optional: false,
          format: "remainder",
        },
      },
    ],
  },
  {
    name: "Mint",
    header: 4235234258,
    fields: [
      {
        name: "amount",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "receiver",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
];

const SampleJetton_getters: ABIGetter[] = [
  {
    name: "get_jetton_data",
    arguments: [],
    returnType: { kind: "simple", type: "JettonData", optional: false },
  },
  {
    name: "get_wallet_address",
    arguments: [
      {
        name: "owner",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
    returnType: { kind: "simple", type: "address", optional: false },
  },
  {
    name: "owner",
    arguments: [],
    returnType: { kind: "simple", type: "address", optional: false },
  },
];

const SampleJetton_receivers: ABIReceiver[] = [
  { receiver: "internal", message: { kind: "typed", type: "Mint" } },
  { receiver: "internal", message: { kind: "text", text: "Mint: 100" } },
  { receiver: "internal", message: { kind: "text", text: "Owner: MintClose" } },
  {
    receiver: "internal",
    message: { kind: "typed", type: "TokenUpdateContent" },
  },
  {
    receiver: "internal",
    message: { kind: "typed", type: "TokenBurnNotification" },
  },
  {
    receiver: "internal",
    message: { kind: "typed", type: "ProvideWalletAddress" },
  },
];

export class SampleJetton implements Contract {
  static async init(owner: Address, content: Cell, max_supply: bigint) {
    return await SampleJetton_init(owner, content, max_supply);
  }

  static async fromInit(owner: Address, content: Cell, max_supply: bigint) {
    const init = await SampleJetton_init(owner, content, max_supply);
    const address = contractAddress(0, init);
    return new SampleJetton(address, init);
  }

  static fromAddress(address: Address) {
    return new SampleJetton(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: SampleJetton_types,
    getters: SampleJetton_getters,
    receivers: SampleJetton_receivers,
    errors: SampleJetton_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message:
      | Mint
      | "Mint: 100"
      | "Owner: MintClose"
      | TokenUpdateContent
      | TokenBurnNotification
      | ProvideWalletAddress
  ) {
    let body: Cell | null = null;
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Mint"
    ) {
      body = beginCell().store(storeMint(message)).endCell();
    }
    if (message === "Mint: 100") {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (message === "Owner: MintClose") {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "TokenUpdateContent"
    ) {
      body = beginCell().store(storeTokenUpdateContent(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "TokenBurnNotification"
    ) {
      body = beginCell().store(storeTokenBurnNotification(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "ProvideWalletAddress"
    ) {
      body = beginCell().store(storeProvideWalletAddress(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getGetJettonData(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("get_jetton_data", builder.build())).stack;
    const result = loadTupleJettonData(source);
    return result;
  }

  async getGetWalletAddress(provider: ContractProvider, owner: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(owner);
    let source = (await provider.get("get_wallet_address", builder.build()))
      .stack;
    let result = source.readAddress();
    return result;
  }

  async getOwner(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("owner", builder.build())).stack;
    let result = source.readAddress();
    return result;
  }
}
