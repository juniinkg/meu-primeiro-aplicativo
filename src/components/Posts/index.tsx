import { View } from "react-native";
import { Post } from "@/components/Post";
import { PostsProps } from "./posts";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";

export function Posts({ posts }: PostsProps) {
  function postsBycolumn(column: "right" | "left") {
    const rest = column ==="left" ? 0 : 1;

  return posts.filter((_, index)=> index % 2 === rest ).map((post) => 
  <Post
  key={post.id}
  post={ post }/>) 

  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
      <View style={styles.container}>
      <View style={styles.column}>{postsBycolumn("left")}</View>
      <View style={styles.column}>{postsBycolumn("right")}</View>
      </View>
    </ScrollView>
  );
}
