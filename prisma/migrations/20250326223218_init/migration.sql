-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "clientid" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "addressline1" TEXT NOT NULL,
    "addressline2" TEXT NOT NULL,
    "addressline3" TEXT NOT NULL,
    "contactperson" TEXT NOT NULL,
    "details" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "partner" (
    "id" TEXT NOT NULL,
    "partnerid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "contactperson" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "productid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "spec1" TEXT,
    "spec2" TEXT,
    "spec3" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "partnerid" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" TEXT NOT NULL,
    "serviceid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "spec1" TEXT,
    "spec2" TEXT,
    "spec3" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "partnerid" TEXT NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderid" TEXT NOT NULL,
    "productid" TEXT NOT NULL,
    "serviceid" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "clientid" TEXT NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientid" TEXT NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "announancement" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientid" TEXT NOT NULL,

    CONSTRAINT "announancement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "client_email_key" ON "client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "client_clientid_key" ON "client"("clientid");

-- CreateIndex
CREATE UNIQUE INDEX "partner_id_key" ON "partner"("id");

-- CreateIndex
CREATE UNIQUE INDEX "partner_partnerid_key" ON "partner"("partnerid");

-- CreateIndex
CREATE UNIQUE INDEX "partner_email_key" ON "partner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "product_productid_key" ON "product"("productid");

-- CreateIndex
CREATE UNIQUE INDEX "service_serviceid_key" ON "service"("serviceid");

-- CreateIndex
CREATE UNIQUE INDEX "order_orderid_key" ON "order"("orderid");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_partnerid_fkey" FOREIGN KEY ("partnerid") REFERENCES "partner"("partnerid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_partnerid_fkey" FOREIGN KEY ("partnerid") REFERENCES "partner"("partnerid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_productid_fkey" FOREIGN KEY ("productid") REFERENCES "product"("productid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_serviceid_fkey" FOREIGN KEY ("serviceid") REFERENCES "service"("serviceid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_clientid_fkey" FOREIGN KEY ("clientid") REFERENCES "client"("clientid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_clientid_fkey" FOREIGN KEY ("clientid") REFERENCES "client"("clientid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "announancement" ADD CONSTRAINT "announancement_clientid_fkey" FOREIGN KEY ("clientid") REFERENCES "client"("clientid") ON DELETE RESTRICT ON UPDATE CASCADE;
