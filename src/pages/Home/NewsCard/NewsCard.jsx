/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import moment from 'moment/moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  return (
    <Card className="mb-5">
      <Card.Header className='d-flex align-items-center'>
        <Image style={{ height: "45px" }} src={author?.img} roundedCircle />
        <div className='ps-3 flex-grow-1 mt-2'>
          <p className='mb-0'>{author?.name}</p>
          <p><small>{moment(author?.published_date).format("YYYY-MM-DD")}</small></p>
        </div>
        <div>
          <FaRegBookmark className='me-2'></FaRegBookmark> <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{details}</> :
            <>{details.slice(0, 250)}...  <Link style={{ color: "#FF8C47" }} className='text-decoration-none fw-bold' to={`/news/${_id}`}>Read More</Link></>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className='flex-grow-1 d-flex align-items-center my-2'>
          <div>
            <Rating style={{ color: "#FF8C47" }}
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
          </div>
          <span className='mt-1 ms-2'>{rating?.number}</span>
        </div>
        <div>
          <FaEye className='me-1'></FaEye> {total_view}
        </div>

      </Card.Footer>
    </Card>
  );
};

export default NewsCard;