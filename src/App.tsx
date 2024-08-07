import {} from "@chakra-ui/icons";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "./components/Column";
import DarkModeIconButton from "./components/DarkModeIconButton";
import { ColumnType } from "./utils/enums";

function App() {
  return (
    <>
      <Heading
        fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
        fontWeight={"bold"}
        textAlign={"center"}
        bgGradient={"linear(to-l, #7928CA, #FF0080)"}
        bgClip={"text"}
        mt={3}
      >
        Kanban Board
      </Heading>
      <DarkModeIconButton position="absolute" top={0} right={2} />
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth={"container.lg"} px={3} py={10}>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 16, md: 3 }}
          >
            <Column column={ColumnType.TO_DO}></Column>
            <Column column={ColumnType.IN_PROGRESS}></Column>
            <Column column={ColumnType.COMPLETED}></Column>
          </SimpleGrid>
        </Container>
      </DndProvider>
    </>
  );
}

export default App;
