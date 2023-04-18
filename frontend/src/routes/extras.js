
    // const todayMenu = [
    //     {
    //         details_id: 16,
    //         item_name: 'hot Choco with Toast',
    //         category_id: "MC01",
    //         menu_day_id: "MD06",
    //         menu_day: 'Saturday',
    //         category_name: 'breakfast'
    //     },
    //     {
    //         details_id: 17,
    //         item_name: 'Jollof with Chicken',
    //         category_id: "MC02",
    //         menu_day_id: "MD06",
    //         menu_day: 'Saturday',
    //         category_name: 'lunch'
    //     },
    //     {
    //         details_id: 18,
    //         item_name: 'Fufu and light soup',
    //         category_id: "MC03",
    //         menu_day_id: "MD06",
    //         menu_day: 'Saturday',
    //         category_name: 'dinner'
    //     }
    // ]



    <Grid container>
        <Grid item sm>
        <Link href="#" variant="body2">
            Forgot password?
        </Link>
        </Grid>
        <Grid item sm>
        <Link2 to="/signup">
            <span style={{fontFamily:'monospace',fontSize:'14px',textDecoration:'underline'}}>
            {"Don't have an account? Sign Up"}
            </span>
        </Link2>
        </Grid>
    </Grid>

    <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
    />