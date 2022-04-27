import React from 'react';
import {CardContent, Card, Typography} from "@material-ui/core";
import "./SellerCard.css"
import PropTypes from "prop-types";
import Button from "../Button/Button";

function SellerCard({title, content}) {
  return (
      <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">{title}</Typography>
          <Typography variant="body1" color="textSecondary">{content}</Typography>
        </CardContent>
      </Card>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
}
export default SellerCard;