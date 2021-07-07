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
            <Card className="card with-logo"><Logo /></Card>
        </Group>
        <Card className="card with-input" style={{ padding: '1em' }}>
            <Text className="content-center mb1" weight="semibold" style={{ color: 'white' }}>Присоединиться к викторине</Text>
            <div className="content-center mb1">
                <Input className="input" type="number" defaultValue="1" />
                <Input className="input" type="number" defaultValue="2" />
                <Input className="input" type="number" defaultValue="3" />
                <Input className="input" type="number" defaultValue="4" />
                <Input className="input" type="number" defaultValue="5" />
                <Input className="input" type="number" defaultValue="6" />
            </div>
            <div className="content-center">
                <Button className="btn-connect" size="s" after={<Icon24Chevron/>}>Начать</Button>
            </div>
        </Card>
        <Button 
            className="btn-gallery" 
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
            className="btn-create"
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
