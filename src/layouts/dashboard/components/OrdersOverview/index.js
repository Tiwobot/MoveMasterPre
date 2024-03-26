// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Percentage tab test
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24etwas%
            </MDTypography>{" "}
            etwastime
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="title1test"
          dateTime="dateTimetest1"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="title2test"
          dateTime="dateTimetest2"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="title3test"
          dateTime="dateTimetest3"
        />
        <TimelineItem color="warning" icon="payment" title="title4test" dateTime="dateTimetest4" />
        <TimelineItem color="primary" icon="vpn_key" title="title5test" dateTime="dateTimetest5" />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
