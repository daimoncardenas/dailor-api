import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatientsService } from './patients.service';
import { Patient } from './dto/patient';
import { CreatePatientInput } from './dto/create-patient.input';
import { UpdatePatientInput } from './dto/update-patient.input';
import { ResponsePatient } from './dto/response-patient';
import { InputQueries } from 'src/common/input-queries';
import { InputIdQueries } from 'src/common/input-id';

@Resolver(() => Patient)
export class PatientsResolver {
  constructor(private readonly patientsService: PatientsService) { }

  @Mutation(() => Patient)
  createPatient(@Args('createPatientInput') createPatientInput: CreatePatientInput) {
    return this.patientsService.create(createPatientInput);
  }

  @Query(() => ResponsePatient, { name: 'patients' })
  async findAll(@Args("input") input: InputQueries): Promise<ResponsePatient> {
    return await this.patientsService.findAll(input);
  }

  @Query(() => Patient, { name: 'patient' })
  findOne(@Args('id') input: InputIdQueries): Promise<Patient> {
    return this.patientsService.findOne(input);
  }

  @Mutation(() => Patient)
  updatePatient(@Args('updatePatientInput') updatePatientInput: UpdatePatientInput) {
    return this.patientsService.update(updatePatientInput);
  }


}
