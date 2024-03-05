

import { FlatList } from "react-native";

import { Filter } from "@/components/filter";
import { styles } from "./styles";
import { FilterProps } from "./filters";

export function Filters({filters,filter, onchange}:FilterProps) {
    return <FlatList 
    data={filters}
    keyExtractor={item=>item}
    renderItem={({ item }) =>( 
    <Filter filter={item}  selected={item===filter} 
    onPress={()=> onchange(item)}
    />
    
    )}
   
    horizontal
    style={styles.list}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.content}
    />
}