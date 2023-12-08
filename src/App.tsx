import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
    return (
        <div>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`, // 1024
                }}
            >
                <GridItem area="nav" bg="coral">
                    Nav
                </GridItem>
                <Show above="lg">
                    <GridItem area="aside" bg="gold">
                        aside
                    </GridItem>
                </Show>
                <GridItem area="main" bg="red">
                    main
                </GridItem>
            </Grid>
        </div>
    );
};

export default App;
