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
          Percentage process etwas
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              etwas%
            </MDTypography>{" "}
            etwas
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="testtitle1"
          dateTime="datetime1"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="testtitle2"
          dateTime="datetime2"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="testtitle3"
          dateTime="datetime3"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="testtitle4"
          dateTime="datetime4"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="testtitle5"
          dateTime="datetime5"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
