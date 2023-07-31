import { Text, View } from "react-native"
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import NewProductForm from "../../components/Forms/NewProductForm";
import { styles } from "./styles";

export default function NewProduct() {
    const { product } = useSelector((state: RootState) => state.product);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Novo Produto</Text>
            <NewProductForm product={product!} />
        </View>
    )
}