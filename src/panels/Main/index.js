import { React, useRef, useState, createRef } from 'react';
import PropTypes from 'prop-types';
import { Icon24Chevron, Icon24Add } from '@vkontakte/icons';
import { Panel, PanelHeader, Card, Text, Input, Button, Counter, Spacing } from '@vkontakte/vkui';

import './index.css';
import Logo from '../../img/logo';


const Main = ({ id, go, snack }) => {
    return (
        <Panel id={id}>
            <PanelHeader>
                Enigma
            </PanelHeader>
            <div className="content-center transparent-background"><Logo /></div>
            <Card className="content-center transparent-background" style={{ padding: '1em' }}>
                <Text className="content-center mb1 text-center" weight="regular">Если у вас есть код для присоединения к игре,<br /> введите его сюда</Text>
                <div className="content-center mb1" style={{ justifyContent: 'space-around' }}>
                </div>
                <div className="content-center">
                    <Button className="btn-connect w25" size="l" disabled={isBtnGoDis}>Присоединиться к викторине</Button>
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
    )
};

Main.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    snack: PropTypes.element
};

export default Main;
