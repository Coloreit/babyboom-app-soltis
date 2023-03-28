import { FlatList } from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem'
//import { CATEGORIES } from '../data/categories'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../store/actions/category.action'

const CategoriesScreen = ({ navigation }) => {

    const categories = useSelector(state => state.categories.categories)
    
    const dispatch = useDispatch()

    const onSelectGridItem = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Products', {
            //categoryId: item.id,
            categoryName: item.title
        })
    }

    const renderGridItem = ({ item }) => <GridItem item={item} onSelect={onSelectGridItem} />

    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen