-- DropForeignKey
ALTER TABLE "announancement" DROP CONSTRAINT "announancement_clientid_fkey";

-- DropForeignKey
ALTER TABLE "message" DROP CONSTRAINT "message_clientid_fkey";

-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_clientid_fkey";

-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_productid_fkey";

-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_serviceid_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_partnerid_fkey";

-- DropForeignKey
ALTER TABLE "service" DROP CONSTRAINT "service_partnerid_fkey";

-- AlterTable
ALTER TABLE "order" ALTER COLUMN "productid" DROP NOT NULL,
ALTER COLUMN "serviceid" DROP NOT NULL;

-- AlterTable
ALTER TABLE "partner" ADD CONSTRAINT "partner_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "partner_id_key";

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_partnerid_fkey" FOREIGN KEY ("partnerid") REFERENCES "partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_partnerid_fkey" FOREIGN KEY ("partnerid") REFERENCES "partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_productid_fkey" FOREIGN KEY ("productid") REFERENCES "product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_serviceid_fkey" FOREIGN KEY ("serviceid") REFERENCES "service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_clientid_fkey" FOREIGN KEY ("clientid") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_clientid_fkey" FOREIGN KEY ("clientid") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "announancement" ADD CONSTRAINT "announancement_clientid_fkey" FOREIGN KEY ("clientid") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
