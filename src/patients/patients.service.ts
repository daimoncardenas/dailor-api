import { Injectable } from '@nestjs/common';
import { CreatePatientInput } from './dto/create-patient.input';
import { UpdatePatientInput } from './dto/update-patient.input';
import { PrismaService } from 'src/prisma.service';
import { InputQueries } from 'src/common/input-queries';
import { ResponsePatient } from './dto/response-patient';
import { InputIdQueries } from 'src/common/input-id';
import { Patient } from './dto/patient';

@Injectable()
export class PatientsService {

  constructor(private prisma: PrismaService) { }


  async create(createPatientInput: CreatePatientInput) {
    try {
      const { address, age, dateOfBirth, email, firstname, lastname, phone, status } = createPatientInput;
      const patient = await this.prisma.patient.create({
        data: {
          address,
          age,
          dateOfBirth,
          email,
          firstname,
          lastname,
          phone,
        }
      });
      return patient;
    } catch (error) {
      throw new Error(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async findAll(input: InputQueries): Promise<ResponsePatient> {
    try {
      const { search, skip, status, take } = input;
      const where = {
        ...(search && { email: { contains: search } }),
        ...(status && { status: status }) as any,
      };
      const patients = await this.prisma.patient.findMany({
        where,
        skip: skip ? skip : 0,
        take: take ? take : 10,
      });

      console.log("patients", patients);
      const total_items = await this.prisma.patient.count({
        where,
      });

      return {
        total_pages: Math.ceil(total_items / (take || 10)),
        current_page: Math.ceil((skip || 0) / (take || 10)) + 1,
        total_items: total_items,
        count: patients.length,
        patients: patients
      } as any
    } catch (error) {
      throw new Error(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async findOne(input: InputIdQueries): Promise<Patient> {
    try {
      const { id } = input
      const patient = await this.prisma.patient.findUnique({
        where: { id }
      });
      return patient as any;
    } catch (error) {
      throw new Error(error);
    } finally {
      await this.prisma.$disconnect();
    }

  }

  async update(updatePatientInput: UpdatePatientInput) {
    try {
      const { address, age, dateOfBirth, email, firstname, lastname, phone, status } = updatePatientInput;
      const patient = await this.prisma.patient.update({
        where: { id: updatePatientInput.id },
        data: {
          ...(address && { address }),
          ...(age && { age }),
          ...(dateOfBirth && { dateOfBirth }),
          ...(email && { email }),
          ...(firstname && { firstname }),
          ...(lastname && { lastname }),
          ...(phone && { phone }),
        }
      });
      return patient;
    } catch (error) {
      throw new Error(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
