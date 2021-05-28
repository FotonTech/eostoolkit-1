import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Eos from '../../../assets/img/blockchains/EOS-icon.png';
import Telos from '../../../assets/img/blockchains/telos-icon.png';
import Jungle from '../../../assets/img/blockchains/jungle-icon.png';
import Proton from '../../../assets/img/blockchains/proton-icon.png';
import Xec from '../../../assets/img/blockchains/xec-icon.png';
import Bos from '../../../assets/img/blockchains/Bos-icon.png';
import Wax from '../../../assets/img/blockchains/Wax-icon.png';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SelectContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: baseline;
  padding: 20px 0;
  row-gap: 16px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const OptionImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Select = styled.div`
  width: 200px;
  color: #000;
`;

class NetworksSelect extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  // eslint-disable-next-line no-undef
  coins = [
    {
      id: 1,
      name: 'EOS',
      asset: Eos,
      endpoint: {
        description: 'API Node',
        failures: 0,
        name: 'Greymass',
        ping: -1,
        port: 443,
        protocol: 'https',
        url: 'eos.greymass.com',
      },
      network: {
        chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
        description: 'The EOS Mainnet',
        endpoints: [
          {
            description: 'API Node',
            failures: 0,
            name: 'Greymass',
            ping: -1,
            port: 443,
            protocol: 'https',
            url: 'eos.greymass.com',
          },
        ],
        name: 'EOS',
        network: 'eos',
        owner: 'The EOS community',
        prefix: 'EOS',
        type: 'mainnet',
      },
    },
    {
      id: 2,
      name: 'TELOS',
      asset: Telos,
      endpoint: {
        description: 'Load balancer of various public nodes provided by the Telos Foundation',
        failures: 0,
        name: 'Telos Foundation',
        ping: -1,
        port: 443,
        protocol: 'https',
        url: 'telos.greymass.com',
      },
      network: {
        chainId: '4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11',
        description: 'TELOS Mainnet',
        endpoints: [
          {
            description: 'Load balancer of various public nodes provided by the Telos Foundation',
            failures: 0,
            name: 'Telos Foundation',
            ping: -1,
            port: 443,
            protocol: 'https',
            url: 'telos.greymass.com',
          },
        ],
        name: 'TELOS',
        network: 'telos',
        owner: 'TELOS',
        prefix: 'TELOS',
        type: 'mainnet',
      },
    },
    {
      id: 3,
      name: 'Jungle',
      asset: Jungle,
      endpoint: {
        description: 'Jungle',
        failures: 0,
        name: 'Jungle',
        ping: -1,
        port: 443,
        protocol: 'https',
        url: 'api.jungle3.alohaeos.com',
      },
      network: {
        chainId: '2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840',
        description: 'Jungle',
        endpoints: [
          {
            description: 'Jungle',
            failures: 0,
            name: 'Jungle',
            ping: -1,
            port: 443,
            protocol: 'https',
            url: 'api.jungle3.alohaeos.com',
          },
        ],
        name: 'JUNGLE',
        network: 'jungle',
        owner: 'JUNGLE',
        prefix: 'JUNGLE',
        type: 'mainnet',
      },
    },
    {
      id: 4,
      name: 'Proton',
      asset: Proton,
      endpoint: {
        description: 'Proton',
        failures: 0,
        name: 'Proton',
        ping: -1,
        port: 443,
        protocol: 'https',
        url: 'proton.cryptolions.io',
      },
      network: {
        chainId: '384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0',
        description: 'Proton',
        endpoints: [
          {
            description: 'Proton',
            failures: 0,
            name: 'Proton',
            ping: -1,
            port: 443,
            protocol: 'https',
            url: 'proton.cryptolions.io',
          },
        ],
        name: 'PROTON',
        network: 'proton',
        owner: 'PROTON',
        prefix: 'PROTON',
        type: 'mainnet',
      },
    },
    {
      id: 5,
      name: 'Xec',
      asset: Xec,
      endpoint: {
        description: 'Xec',
        failures: 0,
        name: 'Xec',
        ping: -1,
        port: 443,
        protocol: 'https',
        url: 'api.europechain.io',
      },
      network: {
        chainId: 'f778f7d2f124b110e0a71245b310c1d0ac1a0edd21f131c5ecb2e2bc03e8fe2e',
        description: 'Xec',
        endpoints: [
          {
            description: 'Xec',
            failures: 0,
            name: 'Xec',
            ping: -1,
            port: 443,
            protocol: 'https',
            url: 'api.europechain.io',
          },
        ],
        name: 'XEC',
        network: 'xec',
        owner: 'XEC',
        prefix: 'XEC',
        type: 'mainnet',
      },
    },
    {
      id: 6,
      name: 'Bos',
      asset: Bos,
      endpoint: {
        description: 'Bos',
        failures: 0,
        name: 'Bos',
        ping: -1,
        port: 443,
        protocol: 'https',
        url: 'api.bossweden.org',
      },
      network: {
        chainId: 'd5a3d18fbb3c084e3b1f3fa98c21014b5f3db536cc15d08f9f6479517c6a3d86',
        description: 'Bos',
        endpoints: [
          {
            description: 'Bos',
            failures: 0,
            name: 'Bos',
            ping: -1,
            port: 443,
            protocol: 'https',
            url: 'api.bossweden.org',
          },
        ],
        name: 'BOS',
        network: 'bos',
        owner: 'BOS',
        prefix: 'BOS',
        type: 'mainnet',
      },
    },
    {
      id: 7,
      name: 'WAX',
      asset: Wax,
      endpoint: {
        description: 'Wax',
        failures: 0,
        name: 'Wax',
        ping: -1,
        port: 443,
        protocol: 'https',
        url: 'wax.greymass.com',
      },
      network: {
        chainId: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
        description: 'Wax',
        endpoints: [
          {
            description: 'Wax',
            failures: 0,
            name: 'Wax',
            ping: -1,
            port: 443,
            protocol: 'https',
            url: 'wax.greymass.com',
          },
        ],
        name: 'WAX',
        network: 'wax',
        owner: 'WAX',
        prefix: 'WAX',
        type: 'mainnet',
      },
    },
  ];

  handleChangeNetwork(network, endpoint) {
    localStorage.clear();
    this.props.selectNetwork(network, endpoint);
  }

  render() {
    return (
      <Wrapper>
        <Select onClick={() => this.handleDropdownVisible()}>
          <SelectContent>
            {this.coins.map(coin => (
              <Option key={coin.id} onClick={() => this.handleChangeNetwork(coin.network, coin.endpoint)}>
                <OptionImage src={coin.asset} alt="asset" />
                {coin.name}
              </Option>
            ))}
          </SelectContent>
        </Select>
      </Wrapper>
    );
  }
}

NetworksSelect.propTypes = {
  selectNetwork: PropTypes.func.isRequired,
};

export default NetworksSelect;
