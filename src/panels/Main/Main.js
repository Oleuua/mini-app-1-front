import React from 'react';
import PropTypes from 'prop-types';
import { Icon24Chevron, Icon24Add } from '@vkontakte/icons';
import { Panel, PanelHeader, Group, Card, Text, Input, Button, Counter, Spacing } from '@vkontakte/vkui';

import './Main.css';
import Logo from '../../img/logo';


const Main = ({ id, go, snack }) => (
    <Panel id={id}>
        <PanelHeader>
            Enigma
        </PanelHeader>
        <div className="content-center transparent-background"><Logo /></div>
        <Card className="content-center transparent-background" style={{ padding: '1em' }}>
            <Text className="content-center mb1 text-center" weight="regular">Если у вас есть код для присоединения к игре,<br /> введите его сюда</Text>
            <div className="content-center mb1" style={{ justifyContent: 'space-around' }}>
                <Input className="input" type="text" defaultValue="1" />
                <Input className="input" type="text" defaultValue="2" />
                <Input className="input" type="text" defaultValue="3" />
                <Input className="input" type="text" defaultValue="4" />
                <Input className="input" type="text" defaultValue="5" />
                <Input className="input" type="text" defaultValue="6" />
            </div>
            <div className="content-center">
                <Button className="btn-connect w25" size="l" disabled>Присоединиться к викторине</Button>
            </div>
        </Card>
        <Card className="content-center transparent-background" style={{ marginTop: '3em' }}>
            <Button
                className="btn-gallery w25"
                size="l"
                after={
                    <div style={{ display: 'flex' }}>
                        <Counter style={{ marginRight: '.5em', backgroundColor: '#4B47B2', color: 'white' }}>3</Counter>
                        <Icon24Chevron />
                    </div>
                }
                onClick={go}
                data-to="mygames"
            >
                Мои викторины
            </Button>
            <Spacing />
            <Button
                className="btn-create w25"
                size="l"
                before={<Icon24Add />}
                after={<Icon24Chevron />}
            >
                Создать викторину
            </Button>
        </Card>
        {snack}
    </Panel>
);

Main.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    snack: PropTypes.element
};

export default Main;
