import React, {useState} from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import {Provider, Searchbar} from 'react-native-paper';
import {useDebounce} from 'use-debounce';
import useRepositories from '../hooks/useRepositories';
import FilterPicker from './FilterPicker';
import RepositoryItem from './RepositroyItem';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    header: {
        margin: 10,
        justifyContent: 'space-evenly'
    }
  });

  
const ItemSeparator = () => <View style={styles.separator} />;

export class RepoListContainer extends React.Component {
    renderHeader = () => {
        const props = this.props;

        return(
            <View style={styles.header}>
                <Searchbar 
                    placeholder="Search"
                    onChangeText={text => props.setKeyword(text)}
                    value={props.keyword}
                />
                <FilterPicker 
                    menuVisible={props.menuVisible} 
                    openMenu={props.openMenu} 
                    closeMenu={props.closeMenu} 
                    latestRepos={props.latestRepos}
                    highestRated={props.highestRated}
                    lowestRated={props.lowestRated}
                />
            </View>
        );
    }

    render() {
        return(
            <Provider>
                <FlatList 
                    data={this.props.repositories}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({item}) => <RepositoryItem repository={item} />}
                    ListHeaderComponent={this.renderHeader}
                />
            </Provider>
        );
    }
}

const RepositoryList = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [orderDirection, setOrderDirection] = useState("DESC");
    const [orderBy, setOrderBy] = useState("CREATED_AT");
    const [keyword, setKeyword] = useState("");
    const [debounceText] = useDebounce(keyword, 500);
    const { repositories, loading } = useRepositories(orderBy, orderDirection, debounceText);

    const respositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    const latestRepos = () => {
        setOrderBy("CREATED_AT");
        setOrderDirection("DESC");
    };

    const highestRated = () => {
        setOrderBy("RATING_AVERAGE");
        setOrderDirection("DESC");
    };

    const lowestRated = () => {
        setOrderBy("RATING_AVERAGE");
        setOrderDirection("ASC");
    };
    
    return(
        <RepoListContainer 
            repositories={respositoryNodes} 
            orderBy={setOrderBy} 
            orderDirection={setOrderDirection} 
            setKeyword={setKeyword}
            keyword={keyword} 
            menuVisible={menuVisible}
            openMenu={openMenu}
            closeMenu={closeMenu}
            latestRepos={latestRepos}
            highestRated={highestRated}
            lowestRated={lowestRated}
            loading={loading}
        />
    );
};

export default RepositoryList;