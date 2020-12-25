import React from 'react';
import {View} from 'react-native';
import { Button, Menu } from 'react-native-paper';

const FilterPicker = ({ menuVisible, openMenu, closeMenu, latestRepos, highestRated, lowestRated }) => {
    return(
        <View>
            <Menu
                visible={menuVisible}
                anchor={<Button style={{ width: '100%' }} icon="chevron-down" onPress={openMenu}>Filter</Button>}
                onDismiss={closeMenu}
            >
                <Menu.Item onPress={latestRepos} title="Latest" />
                <Menu.Item onPress={highestRated} title="Highest Rated" />
                <Menu.Item onPress={lowestRated} title="Lowest Rated" />
            </Menu>
        </View>
    );
};

export default FilterPicker;