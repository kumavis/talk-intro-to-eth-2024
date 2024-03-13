import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate, Slide, FlexBox, Heading, Image, MarkdownSlide, MarkdownSlideSet, Table, TableHeader, TableBody, TableRow, TableCell, SlideLayout, Appear, Stepper } from 'spectacle'

import DHLogo from './assets/decentralized hawaii.png'
import kumavisAvatar from './assets/kumavis-profile.jpg'
import hnlBitdevs from './assets/hnl-bitdevs.jpg'
import symmetricEnc from './assets/Simple_symmetric_encryption.png'
import pubkey1 from './assets/pkc-1.png'
import pubkey2 from './assets/pkc-2.png'
import pubkey3 from './assets/pkc-3.png'
import evmOpcodes from './assets/evm opcodes.png'
import wonka1 from './assets/wonka-1.jpg'
import wonka2 from './assets/wonka-2.jpg'
import etherSupply from './assets/ether-supply-growth-chart.png'
import telegramQr from './assets/telegram-qr.png'

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
        - defi (decentralized finance)
        - new social networks (mastodon, bluesky, farcaster)
        - security / privacy tools
    `}</MarkdownSlide>
    <BasicSlide>
      <Image src={hnlBitdevs} />
      <BlurHeading>Honolulu BitDevs</BlurHeading>
    </BasicSlide>
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
        - bitcoin + ethereum
        - eth roadmap
    `}</MarkdownSlide>
    <MarkdownSlide animateListItems>{`
    why:
      - growing influence of these technologies
      - narratives, news, hype, rumors
      - help you make sense
      - concrete foundation for how these systems work
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
            <TableCell fontFamily='monospace'><Appear>aloha</Appear></TableCell>
            <TableCell fontFamily='monospace'><Appear>d34b6c59ef0497d8ff246abd1049352e</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontFamily='monospace'><Appear>hello</Appear></TableCell>
            <TableCell fontFamily='monospace'><Appear>5d41402abc4b2a76b9719d911017c592</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontFamily='monospace'><Appear>hello</Appear></TableCell>
            <TableCell fontFamily='monospace'><Appear>5d41402abc4b2a76b9719d911017c592</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontFamily='monospace'><Appear>h3llo</Appear></TableCell>
            <TableCell fontFamily='monospace'><Appear>db9ddb0513487221899dea2afc2f00f9</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontFamily='monospace'><Appear>helloo</Appear></TableCell>
            <TableCell fontFamily='monospace'><Appear>b373870b9139bbade83396a49b1afc9a</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontFamily='monospace'><Appear>🖼️</Appear></TableCell>
            <TableCell fontFamily='monospace'><Appear>9e25f762ff33dfea471cac34b8e411ee</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontFamily='monospace'><Appear>📹</Appear></TableCell>
            <TableCell fontFamily='monospace'><Appear>9467f84fa34485e28933ac4aaab88f87</Appear></TableCell>
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
            <TableCell fontFamily='monospace'><Appear>(blockData)+1</Appear></TableCell>
            <TableCell fontFamily='monospace'><Appear>b026324c6904b2a9cb4b88d6d61c81d1</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontFamily='monospace'><Appear>(blockData)+2</Appear></TableCell>
            <TableCell fontFamily='monospace'><Appear>26ab0db90d72e28ad0ba1e22ee510510</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontFamily='monospace'><Appear>(blockData)+3</Appear></TableCell>
            <TableCell fontFamily='monospace'><Appear>5d41402abc4b2a76b9719d911017c592</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontFamily='monospace'><Appear>(blockData)+4</Appear></TableCell>
            <TableCell fontFamily='monospace'><Appear>db9ddb0513487221899dea2afc2f00f9</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontFamily='monospace'><Appear>(blockData)+5</Appear></TableCell>
            <TableCell fontFamily='monospace'><Appear>0373870b9139bbade83396a49b1afc9a</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontFamily='monospace'><Appear>(blockData)+6</Appear></TableCell>
            <TableCell fontFamily='monospace'><Appear>9e25f762ff33dfea471cac34b8e411ee</Appear></TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontFamily='monospace'><Appear>(blockData)+7</Appear></TableCell>
            <TableCell fontFamily='monospace'><Appear>0007f84fa34485e28933ac4aaab88f87</Appear></TableCell>
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
  - backed by scarce energy -> backed by scarce capital
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
  - "single transactor bottleneck"
  - needed to solve tx ordering / double spend
  - limiting the area where a double spend can occur
  - scaling solutions: L2s, sharding, rollups
  ---
  ### L2s
  - "layer two" solutions
  - btc: lightning
  - eth: optimism, linea
  - secondary chains that settle to the main chain
  - cheaper tx fees bc there is less activity
  - extremely broad and deep topic
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
      <Image src={'https://en.bitcoin.it/w/images/en/4/42/Controlled_supply-supply_over_block_height.png'} style={{ maxWidth: '100%' }} />
    </BasicSlide>
    <BasicSlide>
      <Image src={etherSupply} style={{ maxWidth: '100%' }} />
    </BasicSlide>
    <BasicSlide>
      <iframe src="https://ultrasound.money/"
      style={{ width: '100%', height: '100%' }}
      ></iframe>
    </BasicSlide>
    <BasicSlide>
      <iframe src="https://dune.com/hildobby/eth2-staking"
      style={{ width: '100%', height: '100%' }}
      ></iframe>
    </BasicSlide>

    <BasicSlide>
      <BlurHeading>virtual machine</BlurHeading>
    </BasicSlide>
    <MarkdownSlideSet animateListItems>{`
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
      <BlurHeading>eth roadmap</BlurHeading>
    </BasicSlide>
    <MarkdownSlideSet>{`
    ### Scaling via L2s
    
    - Danksharding (cheaper temporary data availability)
    ---
    ### Validation
    
    - Proposer-builder separation (MEV prevention)
    - Single slot finality
    - Secret leader election
    ---
    ### Account abstraction
    
    - custom account security
    - smart contract wallets (program restrictions)
    ---
    ### Optimizing Verification
    
    - Verkle trees are optimized Merkle Trees.
    - Stateless clients will be able to verify new blocks without having to store large amounts of data.
    `}</MarkdownSlideSet>

    <BasicSlide>
      <BlurHeading>eth dencun upgrade</BlurHeading>
    </BasicSlide>
    <MarkdownSlideSet>{`
    ### general optimization
    - EIP-5656: MCOPY - Memory copying instruction [evm: optimization]
    - EIP-1153: Transient storage opcodes [optimization: data cost]
    - EIP-6780: SELFDESTRUCT only in same transaction [unlocking future optimization]
    ---
    ### staking
    - EIP-4788: Beacon block root in the EVM [evm: staking comprehension]
    - EIP-7044: Perpetually Valid Signed Voluntary Exits [staking: delegated]
    - EIP-7045: Increase Max Attestation Inclusion Slot [staking: growth rate]
    - EIP-7514: Add Max Epoch Churn Limit [staking: growth rate cap]
    ---
    ### sharding
    - EIP-4844: Shard Blob Transactions [optimization for L2]
    - EIP-7516: BLOBBASEFEE opcode [evm: shard blobs]
    `}</MarkdownSlideSet>
    <BasicSlide>
      <iframe src="https://www.blocknative.com/ethereum-dencun-upgrade-countdown"
      style={{ width: '100%', height: '100%' }}
      ></iframe>
    </BasicSlide>

    <BasicSlide>
      <BlurHeading>[fin]</BlurHeading>
    </BasicSlide>

    <BasicSlide>
      <BlurHeading>join our telegram group</BlurHeading>
      <Image src={telegramQr} style={{ maxWidth: '100%' }} />
    </BasicSlide>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);