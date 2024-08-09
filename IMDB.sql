-- movies table
CREATE TABLE movie
(
    id           SMALLINT ,
    name         VARCHAR(30) NOT NULL,
    release_date DATE NOT NULL,
    genre        VARCHAR(30) NOT NULL,
    CONSTRAINT PK_Movie PRIMARY KEY (id )
);

-- tv series table
CREATE TABLE tV_series
(
    id         SMALLINT ,
    title      VARCHAR(30) NOT NULL,
    start_date  DATE NOT NULL,
    end_date    DATE NOT NULL,
    CONSTRAINT PK_TVSeries PRIMARY KEY  (id )
);

-- actor table
CREATE TABLE actor
(
    id          SMALLINT,
    name        VARCHAR(30) NOT NULL,
    dob   DATE NOT NULL,
    experience  INT NOT NULL,
    movie_id    SMALLINT,
    series_id   SMALLINT,
    CONSTRAINT PK_Actor PRIMARY KEY  (id ),
    CONSTRAINT FK_Actor_Movie FOREIGN KEY (movie_id) REFERENCES movie(id),
    CONSTRAINT FK_Actor_Series FOREIGN KEY (series_id) REFERENCES tv_series(id)
);







