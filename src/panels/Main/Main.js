import React from 'react';
import PropTypes from 'prop-types';
import { Icon24Chevron, Icon24Add } from '@vkontakte/icons';
import { Panel, PanelHeader, Group, Card, Text, Input, Button, Counter } from '@vkontakte/vkui';

import './Main.css';
import Logo from '../../img/logo';


const Main = ({ id, go, snack }) => (
    <Panel id={id}>
        <PanelHeader>
            Enigma
        </PanelHeader>
        <Group className="group">
            <Card className="card withLogo"><Logo /></Card>
        </Group>
        <Card className="card withInput" style={{ padding: '1em' }}>
            <Text weight="semibold" style={{ color: 'white', display: 'flex', justifyContent: 'center', marginBottom: '1em' }}>Присоединиться к викторине</Text>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1em' }}>
                <Input className="input" type="number" defaultValue="1" />
                <Input className="input" type="number" defaultValue="2" />
                <Input className="input" type="number" defaultValue="3" />
                <Input className="input" type="number" defaultValue="4" />
                <Input className="input" type="number" defaultValue="5" />
                <Input className="input" type="number" defaultValue="6" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button style={{ backgroundColor: 'white', color: '#4B47B2' }} size="s" after={<Icon24Chevron/>}>Начать</Button>
            </div>
        </Card>
        <Button 
            style={{ backgroundColor: '#e1e3e6', color: '#4B47B2', margin: '5em 1em 0.8em 1em' }} 
            size="l" 
            after={
                <div style={{ display: 'flex' }}>
                    <Counter style={{ marginRight: '.5em', backgroundColor: '#4B47B2', color: 'white' }}>13</Counter>
                    <Icon24Chevron/> 
                </div>
            }
        >
                Мои викторины
        </Button>
        <Button 
            style={{ backgroundColor: '#4B47B2', color: 'white', margin: '0em 1em' }} 
            size="l"
            before={<Icon24Add/>}
            after={<Icon24Chevron/>}
        >
            Создать викторину
        </Button>
        {snack}
    </Panel>
);

Main.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    snack: PropTypes.element
};

export default Main;
