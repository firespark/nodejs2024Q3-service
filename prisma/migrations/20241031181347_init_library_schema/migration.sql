-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "version" SERIAL NOT NULL,
    "createdAt" BIGINT NOT NULL,
    "updatedAt" BIGINT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "albums" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "artistId" TEXT,

    CONSTRAINT "albums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artists" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "grammy" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "artists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tracks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "artistId" TEXT,
    "albumId" TEXT,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "tracks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fav_albums" (
    "id" SERIAL NOT NULL,
    "albumId" TEXT NOT NULL,

    CONSTRAINT "fav_albums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fav_artists" (
    "id" SERIAL NOT NULL,
    "artistId" TEXT NOT NULL,

    CONSTRAINT "fav_artists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fav_tracks" (
    "id" SERIAL NOT NULL,
    "trackId" TEXT NOT NULL,

    CONSTRAINT "fav_tracks_pkey" PRIMARY KEY ("id")
);

