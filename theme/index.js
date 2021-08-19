import { extendTheme } from "@chakra-ui/react"
import { theme as chakraTheme } from "@chakra-ui/react"
import styles from "./styles"
import borders from "./foundations/borders"
import Button from "./components/button"
import fonts from "./foundations/fonts"
import colors from "./foundations/colors"
const overrides = {
  ...chakraTheme,
  styles,
  fonts,
  colors,
  borders,
  components: {
    Button,
  },
};

export default extendTheme(overrides);
