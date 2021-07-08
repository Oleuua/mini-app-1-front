import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack  } from '@vkontakte/vkui';



const MyGames = ({ id, go, snack }) => (
    <Panel id={id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={go} data-to="main"/>}
        >
            Мои викторины
        </PanelHeader>
        
        {snack}
    </Panel>
);

MyGames.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    snack: PropTypes.element
};

export default MyGames;
