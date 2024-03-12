import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate, Slide, FlexBox, Heading, Image, MarkdownSlide, MarkdownSlideSet, Table, TableHeader, TableBody, TableRow, TableCell, SlideLayout, Appear, Stepper } from 'spectacle'

import DHLogo from './assets/decentralized hawaii.png'
import kumavisAvatar from './assets/kumavis-profile.jpg'
import symmetricEnc from './assets/Simple_symmetric_encryption.png'
import pubkey1 from './assets/pkc-1.png'
import pubkey2 from './assets/pkc-2.png'
import pubkey3 from './assets/pkc-3.png'
import evmOpcodes from './assets/evm opcodes.png'
import wonka1 from './assets/wonka-1.jpg'
import wonka2 from './assets/wonka-2.jpg'

const theme = {
  colors: {
    primary: 'white',
    secondary: 'reg',
    tertiary: 'black',
    quaternary: 'blue',
  },
  fonts: {
    header: 'Montserrat, sans-serif',
    text: 'Lato, sans-serif',
  },
}

const BlurHeading = (props: any) => (
  <Heading {...props} style={{
    textShadow: '2px 2px 1px red, -2px -2px 1px blue'
  }} />
)

const BasicSlide = (props: any) => (
  <Slide {...props}>
    <FlexBox height="100%" flexDirection={props.flexDirection ?? 'column'}>
      {props.children}
    </FlexBox>
  </Slide>
)

const Presentation = () => (
  <Deck theme={theme} template={() => <DefaultTemplate />}>
    <BasicSlide>
      <BlurHeading>aloha</BlurHeading>
    </BasicSlide>
    <BasicSlide>
      <Image src={DHLogo} style={{ maxWidth: '100%' }} />
    </BasicSlide>
    <MarkdownSlide>{`
      future topics:
        - defi
        - new social networks (mastodon, bluesky, farcaster)
        - security / privacy tools
    `}</MarkdownSlide>
    <MarkdownSlide>{`
      Space for this meeting is generously sponsored by:
      # Sandbox, HUB, and HTDC
    `}</MarkdownSlide>
    <BasicSlide>
      <Image src={kumavisAvatar} />
      <BlurHeading>kumavis</BlurHeading>
    </BasicSlide>
    <MarkdownSlide>{`
      topics:
        - intro to cryptography
        - blockchain
        - ethereum
        - eth roadmap
    `}</MarkdownSlide>

    <BasicSlide>
      <BlurHeading>intro to cryptography</BlurHeading>
    </BasicSlide>
    <BasicSlide>
      <BlurHeading>hash (1950s)</BlurHeading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell><Appear>input</Appear></TableCell>
            <TableCell><Appear>result (hexidecimal)</Appear></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell><Appear>aloha</Appear></TableCell>
            <TableCell><Appear>d34b6c59ef0497d8ff246abd1049352e</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Appear>hello</Appear></TableCell>
            <TableCell><Appear>5d41402abc4b2a76b9719d911017c592</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Appear>hello</Appear></TableCell>
            <TableCell><Appear>5d41402abc4b2a76b9719d911017c592</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Appear>h3llo</Appear></TableCell>
            <TableCell><Appear>db9ddb0513487221899dea2afc2f00f9</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Appear>helloo</Appear></TableCell>
            <TableCell><Appear>b373870b9139bbade83396a49b1afc9a</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Appear>🖼️</Appear></TableCell>
            <TableCell><Appear>9e25f762ff33dfea471cac34b8e411ee</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Appear>📹</Appear></TableCell>
            <TableCell><Appear>9467f84fa34485e28933ac4aaab88f87</Appear></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </BasicSlide>
    <BasicSlide>
      <BlurHeading>symmetric key crypto (50 BCE)</BlurHeading>
      <Image src={symmetricEnc} style={{ background: 'white' }} />
    </BasicSlide>
    <BasicSlide>
      <BlurHeading>public key crypto (1970s)</BlurHeading>
      <Stepper values={[pubkey1, pubkey2, pubkey3]}>
        {(value) => (
          <FlexBox>
            <Image src={value} style={{ background: 'white' }} />
          </FlexBox>
        )}
      </Stepper>
    </BasicSlide>
    <BasicSlide>
      <BlurHeading>markm</BlurHeading>
    </BasicSlide>
    <BasicSlide>
      <BlurHeading>[fin]</BlurHeading>
    </BasicSlide>

    <BasicSlide>
      <BlurHeading>blockchain</BlurHeading>
    </BasicSlide>
    <MarkdownSlideSet animateListItems>{`
  lets build a public permissionless system
  - no central authority, no single point of failure
  - permissionless: open to anyone
  - verifiable, transparent, tamper-proof
  ---
  lets build a public permissionless **ledger** system
  - ledger: a record of accounts and balances
  - hashes: data integrity
  - public key crypto: digital identity
  - internet: communication / synchronization
  - ...what are we missing?
  ---
  the doublespend problem / tx ordering
  - i have 1 coin, i send it twice
  - timestamps are not a cryptographic primitives
  - we need a way to order txs
  - leader election: elect a leader to order txs, and others can verify validity
  - Proof-of-Work (PoW)
  - Proof-of-Stake (PoS)
  `}</MarkdownSlideSet>
    <BasicSlide flexDirection='row'>
      <BlurHeading>PoW:</BlurHeading>
      <FlexBox height="100%" flexDirection='row'>
        <Appear><Image src={wonka1} /></Appear>
        <Appear><Image src={wonka2} /></Appear>
      </FlexBox>
    </BasicSlide>
    <BasicSlide>
      <BlurHeading>PoW</BlurHeading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell><Appear>input: block with nonce</Appear></TableCell>
            <TableCell><Appear>target: "start with four zeros"</Appear></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell><Appear>(blockData)+1</Appear></TableCell>
            <TableCell><Appear>b026324c6904b2a9cb4b88d6d61c81d1</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Appear>(blockData)+2</Appear></TableCell>
            <TableCell><Appear>26ab0db90d72e28ad0ba1e22ee510510</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Appear>(blockData)+3</Appear></TableCell>
            <TableCell><Appear>5d41402abc4b2a76b9719d911017c592</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Appear>(blockData)+4</Appear></TableCell>
            <TableCell><Appear>db9ddb0513487221899dea2afc2f00f9</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Appear>(blockData)+5</Appear></TableCell>
            <TableCell><Appear>0373870b9139bbade83396a49b1afc9a</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Appear>(blockData)+6</Appear></TableCell>
            <TableCell><Appear>9e25f762ff33dfea471cac34b8e411ee</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Appear>(blockData)+7</Appear></TableCell>
            <TableCell><Appear>0007f84fa34485e28933ac4aaab88f87</Appear></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </BasicSlide>
  <MarkdownSlideSet animateListItems>{`
  you mined a block!
  - order transactions
  - collect tx fees
  - collect a block reward (newly minted)
  - try to cheat: include tx invalid signature
  - try to cheat: double spend
  - cheat result: invalid. wasted electricity and missed reward
  ---
  ### PoS
  - validators register (and unregister)
  - validators lock up funds as "stake"
  - active validators are known, randomly selected to take turns
  - "virtual mining" analogy:
  - mining hardware investment -> stake investment
  - cheat result: invalid. lose stake, missed reward
  - offline result: lose stake, missed reward
  ---
  ### PoS
  - PoS is more energy efficient
  - limit via energy -> limit via capital
  - predictable block times
  - lower cost of validating
  - less centralization pressure
  - financial implications of fund lockup (scarcity)
  ---
  ### tx throughput
  - tx throughput is limited by:
  - block size (how much data)
  - block verification time (how much compute)
  - does not scale with number of validators
  - scaling solutions: sharding, rollups
  - limiting the area where a double spend can occur
  ---
  ### tx fees
  - tx fee is a market mechanism to prioritize txs
  - paid to the miner/validator
  - btc: tx data size * priority fee rate
  - eth: (tx data size + tx compute amount) * priority fee rate
  - eth: a portion of the tx fee is burned
  ---
  ### monetary policy
  - base asset: rewards + fees
  - issuance schedule (inflation rate)
  - high issuance: people dont want to hold it
  - low issuance: overly rewards early adopters
  - fee burning:
  - tx fees paid to validators: txs are free for validators
  - reduces supply, deflation
    `}</MarkdownSlideSet>

    <BasicSlide>
      <BlurHeading>virtual machine</BlurHeading>
    </BasicSlide>
    <MarkdownSlideSet>{`
  ### bitcoin

  bitcoin script is a simple stack-based language

  - data
  - basic flow control (if, else, end)
  - arithmetic
  - stack manipulations
  - cryptographic operations (hash, sig verify)
  - (no loops, no state)
  ---
  ### ethereum

  ethereum introduces smart contracts
  - are deployed code
  - hold eth and other assets
  - store data
  - call other contracts
  - loops via jumps
  - gas mechanics
    `}</MarkdownSlideSet>
    <BasicSlide>
      <Image src={evmOpcodes} />
    </BasicSlide>

    <BasicSlide>
      <BlurHeading>[fin]</BlurHeading>
    </BasicSlide>

    <BasicSlide>
      <BlurHeading>eth dencun upgrade</BlurHeading>
    </BasicSlide>
    <MarkdownSlideSet>{`
    - EIP-1153: Transient storage opcodes [optimization: data cost]
    - EIP-4788: Beacon block root in the EVM [evm: staking comprehension]
    - EIP-4844: Shard Blob Transactions [optimization for L2]
    - EIP-7516: BLOBBASEFEE opcode [evm: shard blobs]
    - EIP-5656: MCOPY - Memory copying instruction [evm: optimization]
    ---
    - EIP-6780: SELFDESTRUCT only in same transaction [unlocking future optimization]
    - EIP-7044: Perpetually Valid Signed Voluntary Exits [staking: delegated]
    - EIP-7045: Increase Max Attestation Inclusion Slot [staking: growth rate]
    - EIP-7514: Add Max Epoch Churn Limit [staking: growth rate cap]
    `}</MarkdownSlideSet>
    <BasicSlide>
      <iframe src="https://www.blocknative.com/ethereum-dencun-upgrade-countdown"
      style={{ width: '100%', height: '100%' }}
      ></iframe>
    </BasicSlide>

    <BasicSlide>
      <BlurHeading>eth roadmap</BlurHeading>
    </BasicSlide>
    <MarkdownSlideSet>{`
    ### Danksharding
    
    Danksharding makes layer 2 rollups much cheaper for users by adding “blobs” of data to Ethereum blocks.
    ---
    ### Single slot finality
    
    Instead of waiting for fifteen minutes, blocks could get proposed and finalized in the same slot. This is more convenient for apps and much more difficult to attack.
    ---
    ### Proposer-builder separation
    
    Splitting the block building and block proposal tasks across separate validators creates a fairer, more censorship resistant and efficient way for Ethereum to come to consensus.
    ---
    ### Secret leader election
    
    Clever cryptography can be used to ensure that the identity of the current block proposer is not made public, protecting them from certain types of attack.
    ---
    ### Account abstraction
    
    Account abstraction is a class of upgrades that support smart contract wallets natively on Ethereum, rather than having to use complex middleware.
    ---
    ### Verkle trees
    
    Verkle trees are a data structure that can be used to enable stateless clients on Ethereum. These “stateless” clients will require a tiny amount of storage space but will still be able to verify new blocks.
    ---
    ### Statelessness
    
    Stateless clients will be able to verify new blocks without having to store large amounts of data. This will provide all the benefits of running a node with only a tiny fraction of today’s costs.
    `}</MarkdownSlideSet>

    <BasicSlide>
      <BlurHeading>[fin]</BlurHeading>
    </BasicSlide>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);