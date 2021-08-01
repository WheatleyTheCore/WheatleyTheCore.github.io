import React from "react";
import { Link } from "gatsby";
import {getImage} from 'gatsby-plugin-image'
import Card from "@material-ui/core/Card";
import Thumbnail from './thumbnail'

const LinkCard = (props) => {
  const image = getImage(props.image)
  return (
    <Card className="card">
            <Link to={`/posts/${props.slug}`} className="card">
            <div className="thumbnailContainer">
              <Thumbnail image={image}/>
            </div>

              <div className="cardText">
                <div className="cardTitle">
                  {props.title}
                </div>
                <div className="cardDate">
                  {props.datePublished}
                </div>
              </div>
            </Link>

    </Card>
  );
};

export default LinkCard;
